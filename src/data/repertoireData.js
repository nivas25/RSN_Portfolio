export const projectData = [
  // === AI & MACHINE LEARNING ===

  {
    id: "ml1",
    category: "AI & Machine Learning",
    title: "REM Sleep Stage Classifier",
    type: "ml-model",
    status: "Completed",
    description:
      "Classifies REM sleep stages using EEG, EOG, EMG, and ECG biosignal data.",
    techStack: [
      "Python",
      "NumPy",
      "SciPy",
      "Scikit-learn",
      "MNE",
      "Matplotlib",
    ],
    imageUrl: ["/images/projects/rem/rem-01.webp"],
    liveUrl: "#",
    githubUrl: "https://github.com/nivas25/REM_sleep_classifier",
    longDescription:
      "This project involves preprocessing biosignals (EEG, EOG, EMG, ECG) and training a REM sleep stage classifier. Signal filtering, epoching, and feature extraction are done using MNE and SciPy before feeding into machine learning models.",
    myRole: "ML Research Intern at Cheal",
    goals: [
      "Preprocess biosignals accurately to remove noise and artifacts.",
      "Engineer features sensitive to REM stages.",
      "Train and evaluate models for REM classification.",
    ],
    features: [
      "Multi-channel biosignal support.",
      "REM vs Non-REM classification.",
      "Modular signal preprocessing pipeline.",
    ],
    challenges:
      "Handling large `.edf` files and aligning multi-channel signals posed challenges in memory efficiency and signal synchronization.",
  },

  {
    id: "ml2",
    category: "AI & Machine Learning",
    title: "Music Generation with MusicGen",
    type: "ml-model",
    status: "Completed",
    description:
      "Generates music from text prompts using Meta’s MusicGen model.",
    techStack: ["Python", "Transformers", "Streamlit", "Gradio"],
    imageUrl: [
      "/images/projects/music-gen/music-gen-01.webp",
      "/images/projects/music-gen/music-gen-02.webp",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/nivas25/Music_ND",
    longDescription:
      "This web app allows users to generate music from text prompts using Meta’s MusicGen. It supports multiple styles and tempo control. The UI is built with Flask for simplicity.",
    myRole: "Developer",
    goals: [
      "Integrate MusicGen with an interactive frontend.",
      "Support real-time audio playback after generation.",
      "Provide multiple genre and tempo options.",
    ],
    features: [
      "Text-to-music generation.",
      "Adjustable tempo and genre input.",
      "Flask based interactive UI.",
    ],
    challenges:
      "Handling GPU memory requirements for music inference and optimizing audio rendering in real-time were key technical hurdles.",
  },

  {
    id: "ml3",
    category: "AI & Machine Learning",
    title: "Eye Drowsiness Detection System",
    type: "ml-model",
    status: "Completed",
    description:
      "Detects drowsiness by monitoring eye aspect ratio using facial landmarks.",
    techStack: ["Python", "OpenCV", "dlib", "pyttsx3"],
    imageUrl: ["/images/projects/eyes/eyes-01.webp"],
    liveUrl: "#",
    githubUrl: "https://github.com/nivas25/Eye_drowsiness_detection",
    longDescription:
      "This real-time system monitors eye blinks using dlib landmarks and triggers alerts when signs of drowsiness are detected. It uses EAR (Eye Aspect Ratio) and provides voice alerts.",
    myRole: "Computer Vision Developer",
    goals: [
      "Monitor driver drowsiness in real-time.",
      "Trigger alerts based on EAR thresholds.",
    ],
    features: [
      "Real-time video stream detection.",
      "Voice alert via pyttsx3.",
      "No external sensors required.",
    ],
    challenges:
      "Getting stable eye landmark detection in variable lighting and camera angles was tricky. Added adaptive thresholding and smoothing.",
  },

  {
    id: "ml4",
    category: "AI & Machine Learning",
    title: "Sanganeri Design Generation",
    type: "ml-model",
    status: "In Progress",
    description:
      "Generates novel Sanganeri block print designs using generative AI models.",
    techStack: ["Python", "PyTorch", "Generative Adversarial Networks (GANs)"],
    imageUrl: ["/images/projects/sanganeri/sanganeri-02.webp"],
    liveUrl: "#",
    githubUrl: "#",
    longDescription:
      "This project focuses on leveraging Generative Adversarial Networks (GANs) to learn the intricate patterns of traditional Sanganeri block prints. The goal is to generate new, unique designs that maintain the traditional aesthetic.",
    myRole: "AI Developer",
    goals: [
      "Train a stable GAN on a dataset of Sanganeri prints.",
      "Generate high-resolution, novel design patterns.",
      "Explore variations in color and style through the model's latent space.",
    ],
    features: [
      "Novel design generation.",
      "Style and pattern customization.",
      "High-resolution image output.",
    ],
    challenges:
      "Curating a high-quality, diverse dataset of Sanganeri prints and achieving high-resolution, coherent outputs from the GAN are the primary challenges.",
  },

  // === WEB DEVELOPMENT ===

  {
    id: "web1",
    category: "Web Development",
    title: "Hostel Food Management System",
    type: "webapp",
    status: "Completed",
    description: "A web app to manage hostel food orders, menus, and feedback.",
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js"],
    imageUrl: [
      "/images/projects/hostel/hostel-01.webp",
      "/images/projects/hostel/hostel-02.webp",
      "/images/projects/hostel/hostel-03.webp",
      "/images/projects/hostel/hostel-04.webp",
      "/images/projects/hostel/hostel-05.webp",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/nivas25/Hostel_food_managment_system-",
    longDescription:
      "The system allows hostel students to view menus, place food orders, and submit feedback. Admins can update menus, track consumption stats, and manage student preferences.",
    myRole: "Full Stack Developer",
    goals: [
      "Digitize hostel food planning and feedback.",
      "Build an easy-to-use react interface.",
      "Support real-time admin updates.",
    ],
    features: [
      "Student login and order tracking.",
      "Admin menu editor.",
      "Feedback collection and reporting.",
    ],
    challenges:
      "Implementing a clean backend in express and maintaining the states",
  },

  {
    id: "web2",
    category: "Web Development",
    title: "Portfolio Website",
    type: "webapp",
    status: "Completed",
    description:
      "A personal portfolio built to showcase projects and skills with a modern UI.",
    techStack: ["React.js", "Vanilla CSS", "Framer Motion", "Vite"],
    imageUrl: [
      "/images/projects/portfolio/portfolio-01.webp",
      "/images/projects/portfolio/portfolio-02.webp",
      "/images/projects/portfolio/portfolio-03.webp",
      "/images/projects/portfolio/portfolio-04.webp",
      "/images/projects/portfolio/portfolio-05.webp",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/nivas25/portfolio",
    longDescription:
      "This dynamic and responsive portfolio site showcases my AI/ML and web development work. It includes animated project cards, smooth transitions, and quick access to GitHub and LinkedIn.",
    myRole: "Frontend Developer & Designer",
    goals: [
      "Create a professional digital presence.",
      "Ensure mobile responsiveness and fast loading.",
      "Add subtle animations to improve UX.",
    ],
    features: [
      "Project filtering by category.",
      "Framer Motion animations.",
      "Responsive layout with Tailwind.",
    ],
    challenges:
      "Maintaining animation performance across mobile and desktop while keeping bundle size small was a key challenge.",
  },
];
