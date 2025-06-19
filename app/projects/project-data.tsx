export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Talk2DAU",
    year: 2025,
    description: "An AI-powered chatbot for DAU, built with Langchain, Groq LLM, and Streamlit to answer questions from uploaded PDFs interactively.",
    url: "https://github.com/NT1906/Talk2DAU",
  },
  {
    title: "PRI-Prescription Risk Insight",
    year: 2025,
    description: "A machine learning model was developed using real Washington State data to predict opioid prescription risk levels, achieving 87% test accuracy.",
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
