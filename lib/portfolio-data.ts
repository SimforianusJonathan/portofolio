export const portfolioData = {
  name: "Universitas Indonesia Student",
  title: "CS Student | AI & Blockchain Enthusiast",
  location: "Depok, Indonesia",
  email: "your.email@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",

  about: "I'm an undergraduate computer science student at Universitas Indonesia driven by curiosity in artificial intelligence, deep learning, and blockchain technologies. Through academic projects and competitions, I've developed hands-on experience across full-stack development, DevOps, and emerging technologies. I'm passionate about research, problem-solving, and building impactful solutions at the intersection of intelligent systems and decentralized technology. Quick learner with strong adaptability in exploring new technical domains.",

  currentFocus: [
    "Artificial Intelligence",
    "Deep Learning",
    "Machine Learning",
    "Blockchain / Web3",
    "Applied Software Engineering for intelligent systems"
  ],

  skills: {
    "AI & Machine Learning": [
      "PyTorch",
      "TensorFlow",
      "Hugging Face",
      "LangChain",
      "Computer Vision",
      "NLP"
    ],
    "Blockchain & Web3": [
      "Solidity",
      "Ethereum",
      "Smart Contracts",
      "DeFi",
      "Web3.py",
      "Hardhat"
    ],
    "Software Engineering": [
      "Python",
      "JavaScript/TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "PostgreSQL"
    ],
    "Dev Tools": [
      "Git",
      "Docker",
      "AWS",
      "VS Code",
      "Jupyter",
      "Linux"
    ]
  },

  projects: [
    {
      title: "AI-Powered News Summarizer",
      description: "Built a web app that summarizes news articles using GPT-4 and LangChain. Features semantic search, multi-source aggregation, and custom summaries.",
      tags: ["Python", "LangChain", "OpenAI", "React", "FastAPI"],
      category: "AI",
      link: "https://github.com"
    },
    {
      title: "DeFi Yield Optimizer",
      description: "Smart contract suite for optimizing yield farming strategies across multiple protocols. Includes automated rebalancing and risk analysis.",
      tags: ["Solidity", "DeFi", "Ethereum", "Hardhat"],
      category: "Blockchain",
      link: "https://github.com"
    },
    {
      title: "Computer Vision Model Zoo",
      description: "Comprehensive library of pre-trained computer vision models for object detection, segmentation, and pose estimation with easy inference APIs.",
      tags: ["PyTorch", "Computer Vision", "OpenCV", "Python"],
      category: "AI",
      link: "https://github.com"
    },
    {
      title: "Decentralized Task Marketplace",
      description: "Web3 platform connecting task creators with solvers. Built with Next.js, Solidity, and integrates IPFS for data storage.",
      tags: ["Solidity", "Next.js", "Web3", "IPFS"],
      category: "Blockchain",
      link: "https://github.com"
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing neural network architectures and training processes. Supports custom models and real-time visualization.",
      tags: ["React", "Three.js", "D3.js", "PyTorch"],
      category: "AI",
      link: "https://github.com"
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Full-stack application for tracking cryptocurrency portfolios with real-time price updates, analytics, and tax reporting features.",
      tags: ["React", "Node.js", "MongoDB", "Web3.js"],
      category: "Blockchain",
      link: "https://github.com"
    }
  ],

  education: [
    {
      school: "Universitas Indonesia",
      degree: "Bachelor of Science in Computer Science",
      field: "Computer Science",
      expected: "2027",
      gpa: "3.72/4.0",
      location: "Depok, Indonesia",
      highlights: [
        "Current cGPA: 3.72/4.00",
        "Relevant coursework: Reinforcement Learning, Data Science, Deep Learning, Web & Search Retrieval, Advanced Programming, Platform-based Programming"
      ]
    },
    {
      school: "SMA Negeri 98 Jakarta",
      degree: "Senior High School",
      field: "Mathematics and Natural Science",
      expected: "2023",
      location: "Jakarta, Indonesia",
      highlights: [
        "Completed 2023"
      ]
    }
  ],

  experience: [
    {
      company: "AI Research Lab",
      title: "Machine Learning Intern",
      period: "Jun 2024 - Present",
      description: "Contributing to research on efficient language models and prompt optimization techniques.",
      achievements: [
        "Implemented novel attention mechanism for reducing model size by 40%",
        "Published research findings in peer-reviewed venue",
        "Mentored 2 junior interns on ML best practices"
      ]
    },
    {
      company: "Blockchain Startup",
      title: "Smart Contract Developer",
      period: "Jan 2024 - May 2024",
      description: "Developed and audited smart contracts for DeFi protocols.",
      achievements: [
        "Built trading bot generating $50K+ in yield",
        "Conducted security audits for 3+ protocols",
        "Optimized gas usage reducing costs by 35%"
      ]
    },
    {
      company: "Tech Consulting Firm",
      title: "Software Engineering Intern",
      period: "Jun 2023 - Aug 2023",
      description: "Developed full-stack applications for enterprise clients.",
      achievements: [
        "Built REST APIs handling 1M+ requests/day",
        "Improved application performance by 45%",
        "Led code reviews and established coding standards"
      ]
    }
  ],

  coursework: [
    {
      semester: "Spring 2024",
      courses: [
        "Advanced Machine Learning",
        "Cryptography & Security",
        "Distributed Systems",
        "Natural Language Processing"
      ]
    },
    {
      semester: "Fall 2023",
      courses: [
        "Computer Vision",
        "Blockchain Technology",
        "Operating Systems",
        "Algorithm Design"
      ]
    },
    {
      semester: "Spring 2023",
      courses: [
        "Machine Learning",
        "Database Systems",
        "Networks & Protocols",
        "Software Engineering"
      ]
    }
  ]
};

export type PortfolioData = typeof portfolioData;
