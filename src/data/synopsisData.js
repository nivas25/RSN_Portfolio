import pesPhoto from "../assets/images/pes-university.jpg";
import sjpPhoto from "../assets/images/sj-polytechnic.jpg";
import airobosoftPhoto from "../assets/images/airobosoft-office.jpg";
import chealPhoto from "../assets/images/cheal-research.jpg";
import sesPhoto from "../assets/images/standard-english-school.jpg";

// --- Data for the InfoCards ---
export const experienceData = [
  {
    date: "Jan 2024 - April 2024",
    title: "AI & Machine Learning Intern",
    subtitle: "Airobosoft",
    description: "Internship",
    detailImageUrl: airobosoftPhoto,
    googleMapsUrl: "https://g.co/kgs/uKG2ebf",
    websiteUrl: "https://www.airobosoft.com/",
    achievements: [
      "As an intern, I contributed to the development of AI-driven software systems.",
      "My work involved fine-tuning predictive models and creating efficient data processing algorithms.",
      "Gained practical experience applying Machine Learning and Deep Learning concepts to real-world challenges.",
    ],
  },
  {
    date: "June 2025 - July 2025",
    title: "Research Intern",
    subtitle: "cHEAL, PES University",
    description: "Research Internship",
    detailImageUrl: chealPhoto,
    googleMapsUrl: "https://g.co/kgs/1EmwgnN",
    websiteUrl: "https://cheal.pes.edu/",
    achievements: [
      "Worked as part of a collaborative team in the neuroscience domain.",
      "Contributed to a research project on REM Sleep EEG Analysis for identifying mental health conditions.",
      "Analyzed dream-associated arousal activity from complex EEG data sets.",
      "Gained valuable experience in neuro-technological research and data interpretation.",
    ],
  },
];

export const educationData = [
  {
    date: "2024 — Present",
    title: "Bachelors in Computer Science & Engg",
    subtitle: "PES University",
    description: "CGPA: 8.29",

    detailImageUrl: pesPhoto,
    googleMapsUrl: "https://g.co/kgs/1EmwgnN",
    websiteUrl: "https://pes.edu/",
    achievements: [
      "Advanced to Stage-2 in the CIE Ignite startup incubator with a novel project idea.",
      "Achieved Distinction Awards for consistent academic excellence in multiple semesters.",
      "Focused my studies on the practical applications of AI/ML in engineering.",
    ],
  },
  {
    date: "2021 — 2024",
    title: "Diploma in Computer Science & Engg",
    subtitle: "S.J. Polytechnic (S.J.P)",
    description: "CGPA: 9.85",

    detailImageUrl: sjpPhoto,
    googleMapsUrl: "https://g.co/kgs/jxonKrQ",
    websiteUrl: "https://sjpolytechnic.karnataka.gov.in/en/",
    achievements: [
      "Secured a 30th state rank in the competitive D-CET examination.",
      "Recognized with the Canara Bank Merit Scholarship for outstanding academic performance.",
      "Competed in the Samsung industry-academic hackathon, developing innovative solutions.",
      "Took a role in organizing 'Techbiz', our institution's flagship event.",
    ],
  },

  {
    date: "2011 — 2021",
    title: "SSLC",
    subtitle: "Standard English School",
    description: "SSLC: 86.88%",
    detailImageUrl: sesPhoto,
    googleMapsUrl: "https://g.co/kgs/9231sJz",
    websiteUrl: "http://www.standardpublicschool.in/",
    achievements: [
      "Completed my entire foundational schooling (LKG to 10th Grade) at this institution.",
    ],
  },
];

// --- Animation Variants & Configs---
export const nameParts = [
  { letter: "R", suffix: "eddy" },
  { letter: "S", suffix: "ai" },
  { letter: "N", suffix: "ivas" },
];

export const containerVariants = {
  hidden: { gap: "0rem" },
  visible: {
    gap: "1.5rem",
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 2 },
  },
};

export const suffixVariants = {
  hidden: { opacity: 0, width: 0 },
  visible: {
    opacity: 1,
    width: "auto",
    transition: { duration: 0.8, ease: "easeOut", delay: 2.4 },
  },
};
