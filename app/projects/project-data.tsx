export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "DiaTongue",
    year: 2025,
    description: "AI-powered diabetes screening from tongue images using MobileNetV2 and FastAPI, deployed as a Telegram bot for real-time analysis with 86% accuracy.",
    url: "https://github.com/NT1906/DiaTongue",
  },
  {
    title: "Talk2DAU",
    year: 2025,
    description: "Retrieval-augmented chatbot for university resources using LangChain, Groq LLM, and FAISS, with document chunking and vector search, deployed on Streamlit Cloud.",
    url: "https://github.com/NT1906/Talk2DAU",
  },
  {
    title: "PRI-Prescription Risk Insight",
    year: 2025,
    description: "Random Forest model classifying opioid prescriptions as high or low risk from Washington State demographic and prescription data, with about 87% accuracy.",
    url: "https://github.com/NT1906/PRI-Prescription-Risk-Insight",
  },
  {
    title: "DDAPP",
    year: 2025,
    description: "Dyslexia Detection App, Presented Poster at CTDP-IIMA",
    url: "https://drive.google.com/drive/folders/1zC1qD0_Jg1c3c3VXqEVIPEzWPK2M-pfN?usp=sharing",
  },
  {
    title: "Quotegen",
    year: 2023,
    description: "Built with Anvil, using the Quote API to display random quotes to users.",
    url: "https://quotegen.anvil.app/",
  },
  {
    title: "Wordchar",
    year: 2023,
    description: "Developed a free, web-based word and character counter using Anvil.",
    url: "https://wordchar.anvil.app/",
  },
  {
    title: "Gemini_Demo",
    year: 2023,
    description: "Using Gemini API created a image captioning tool on web.",
    url: "https://github.com/NT1906/gemini_demo",
  },
  {
    title: "NAPP",
    year: 2022,
    description: "Lung Cancer and Cataract detector app using MIT App Inventor. ",
    url: "https://appathon.appinventor.mit.edu/archive/2022/finalists",
  },
  
];
