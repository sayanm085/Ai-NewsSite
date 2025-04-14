// server.js
import express from 'express';
import mongoose from 'mongoose';
import cron from 'node-cron';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
// Import your AI libraries
import { LangChain } from 'langchain';
import { GeminiAPI } from './gemini-api.js'; // assume a wrapper for Gemini API

// ---------------------------
// CONFIGURATION & SETUP
// ---------------------------

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/newsAgentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected');
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

// Setup Cloudinary storage for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'news_images',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});
const upload = multer({ storage });

// Define Mongoose schema and model for news articles
const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  imageUrl: String,
  publishedAt: { type: Date, default: Date.now },
});
const NewsArticle = mongoose.model('NewsArticle', newsSchema);

// ---------------------------
// AI & RESEARCH FUNCTIONS
// ---------------------------

/**
 * researchCategory:
 * For a given news category, this function uses LangChain to build a prompt
 * that fetches recent updates and then uses the Gemini API to generate a summary.
 */
async function researchCategory(category) {
  // Build a research prompt chain using LangChain
  const researchPrompt = `Research and summarize the latest news in the ${category} field.`;
  const researchChain = new LangChain({ prompt: researchPrompt });
  
  // Use Gemini API to generate the research summary (pseudo-code)
  const researchData = await GeminiAPI.generateContent({
    prompt: researchPrompt,
    temperature: 0.7,
  });
  return researchData;
}

/**
 * generateNewsArticle:
 * Using the research data, generate a catchy news article.
 */
async function generateNewsArticle(category, researchData) {
  const generationPrompt = `
    Based on the following research data, write a catchy and engaging news article in the ${category} category:
    ${researchData}
  `;
  // Again, use LangChain to structure the prompt chain and Gemini API to generate text
  const newsChain = new LangChain({ prompt: generationPrompt });
  const article = await GeminiAPI.generateContent({
    prompt: generationPrompt,
    temperature: 0.8,
  });
  // Optionally, parse out a title (this could be an additional API call or prompt)
  const titlePrompt = `Generate a catchy title for this article: ${article}`;
  const title = await GeminiAPI.generateContent({
    prompt: titlePrompt,
    temperature: 0.6,
  });
  return { title: title.trim(), content: article.trim() };
}

/**
 * processCategory:
 * For a given category, execute the full chain: research, generate article, and upload image.
 */
async function processCategory(category) {
  try {
    const researchData = await researchCategory(category);
    const { title, content } = await generateNewsArticle(category, researchData);
    
    // Here, you might fetch or generate an image URL related to the article.
    // For demonstration, we assume you have a local image file that you upload.
    // In a real scenario, this might be a separate AI image generation process.
    const dummyImagePath = './dummy-image.jpg'; // replace with your image source
    
    // Upload image to Cloudinary using Multer middleware (simulate file upload)
    // For a headless process, you might use Cloudinary's uploader directly:
    const uploadResult = await cloudinary.uploader.upload(dummyImagePath, {
      folder: 'news_images',
    });
    
    // Save the generated article to MongoDB
    const newsArticle = new NewsArticle({
      title,
      content,
      category,
      imageUrl: uploadResult.secure_url,
    });
    await newsArticle.save();
    console.log(`Article saved for category ${category}: ${title}`);
  } catch (error) {
    console.error(`Error processing category ${category}:`, error);
  }
}

// ---------------------------
// AUTOMATED NEWS AGENT SCHEDULER
// ---------------------------

// Predefined categories
const categories = [
  'Technology',
  'Programming',
  'Artificial Intelligence',
  'New Research in Science',
];

// Schedule the process to run every 30 minutes
cron.schedule('*/30 * * * *', async () => {
  console.log('Starting news generation process...');
  for (const category of categories) {
    await processCategory(category);
  }
  console.log('News generation process completed.');
});

// ---------------------------
// EXPRESS SERVER & ROUTES
// ---------------------------

const app = express();
app.use(express.json());

// Endpoint to manually trigger the process (if needed)
app.post('/generate-news', async (req, res) => {
  try {
    for (const category of categories) {
      await processCategory(category);
    }
    res.status(200).send('News articles generated successfully.');
  } catch (error) {
    console.error('Error generating news:', error);
    res.status(500).send('Error generating news articles.');
  }
});

// (Optional) Endpoint to list generated news articles
app.get('/articles', async (req, res) => {
  try {
    const articles = await NewsArticle.find().sort({ publishedAt: -1 });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).send('Error retrieving articles.');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
