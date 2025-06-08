import React from 'react';
import { 
  Target, Heart, BookOpen, CheckCircle, ArrowLeft, Clock, 
  Users, Award, Calendar, FileText, Video, BookMarked,
  TrendingUp, Star, Phone, Mail, X
} from 'lucide-react';

// Program Details Data
export const programsData = {
  'iit-jee': {
    id: 'iit-jee',
    title: "IIT-JEE Preparation",
    subtitle: "Comprehensive JEE Main & Advanced preparation",
    icon: Target,
    color: "from-blue-600 to-purple-600",
    description: "Master the most challenging engineering entrance exam with our comprehensive IIT-JEE preparation program. Designed by IIT faculty with proven methodologies.",
    duration: "11 Months",
    batchSize: "15-20 Students",
    features: [
      "Advanced Problem Solving Techniques",
      "Regular Mock Tests (JEE Pattern)",
      "Daily Doubt Clearing Sessions",
      "Previous 15 Years Question Analysis",
      "Physics Lab Practical Sessions",
      "Weekly Performance Assessment"
    ],
    detailedFeatures: {
      "Comprehensive Curriculum": [
        "Mechanics: Motion, Forces, Energy, Momentum",
        "Thermodynamics: Laws, Processes, Kinetic Theory",
        "Electromagnetism: Electric & Magnetic Fields, Induction",
        "Optics: Ray & Wave Optics, Interference, Diffraction",
        "Modern Physics: Quantum, Nuclear, Semiconductor"
      ],
      "Teaching Methodology": [
        "Concept Building from Fundamentals",
        "Visual Learning with Animations",
        "Real-world Applications",
        "Step-by-step Problem Solving",
        "Shortcut Techniques for Time Management"
      ],
      "Assessment Pattern": [
        "Weekly Chapter Tests",
        "Monthly Full Syllabus Tests",
        "All India Mock Tests",
        "Previous Year Paper Practice",
        "Performance Analytics & Reports"
      ]
    },
    schedule: [
      { day: "Monday", topics: "Mechanics & Numerical", time: "4:00 PM - 6:00 PM" },
      { day: "Tuesday", topics: "Thermodynamics & Problems", time: "4:00 PM - 6:00 PM" },
      { day: "Wednesday", topics: "Electromagnetism Theory", time: "4:00 PM - 6:00 PM" },
      { day: "Thursday", topics: "Optics & Modern Physics", time: "4:00 PM - 6:00 PM" },
      { day: "Friday", topics: "Problem Solving Session", time: "4:00 PM - 6:00 PM" },
      { day: "Saturday", topics: "Mock Test & Analysis", time: "2:00 PM - 5:00 PM" }
    ],
    fees: {
      course: "Contact Accordingly",
      installments: "Installments Available",
      includes: ["Study Materials", "Online Portal Access", "Mock Test Series", "Doubt Clearing Sessions"]
    },
    successStats: {
      selections: "150+ IIT Selections",
      topRank: "AIR 23 (2024)",
      averageRank: "Under 1000",
      passRate: "92%"
    }
  },
  'neet': {
    id: 'neet',
    title: "NEET Physics",
    subtitle: "Medical entrance focused physics preparation",
    icon: Heart,
    color: "from-red-500 to-pink-600",
    description: "Specialized NEET Physics preparation focusing on NCERT concepts with medical applications. Perfect blend of theory and numerical problems.",
    duration: "10 Months",
    batchSize: "20-25 Students",
    features: [
      "NCERT Based Comprehensive Coverage",
      "Medical Physics Applications",
      "Previous Year Analysis (15 Years)",
      "NEET Pattern Mock Tests",
      "Conceptual Clarity Sessions",
      "Biology-Physics Integration"
    ],
    detailedFeatures: {
      "NCERT Mastery": [
        "Line by Line NCERT Coverage",
        "In-text Questions & Examples",
        "Exercise Problems with Variations",
        "Supplementary Reader Integration",
        "Concept Maps & Flow Charts"
      ],
      "Medical Applications": [
        "Physics in Medical Devices",
        "Human Body Physics",
        "Medical Imaging Techniques",
        "Biomedical Instrumentation",
        "Radiation in Medicine"
      ],
      "Problem Solving": [
        "NEET Level Numerical Practice",
        "Conceptual Multiple Choice Questions",
        "Assertion-Reason Type Questions",
        "Time Management Techniques",
        "Error Analysis & Common Mistakes"
      ]
    },
    schedule: [
      { day: "Monday", topics: "Mechanics & Human Body", time: "5:00 PM - 7:00 PM" },
      { day: "Tuesday", topics: "Heat & Thermodynamics", time: "5:00 PM - 7:00 PM" },
      { day: "Wednesday", topics: "Electricity & Medical Devices", time: "5:00 PM - 7:00 PM" },
      { day: "Thursday", topics: "Optics & Vision", time: "5:00 PM - 7:00 PM" },
      { day: "Friday", topics: "Modern Physics & Radiation", time: "5:00 PM - 7:00 PM" },
      { day: "Saturday", topics: "NEET Mock Test", time: "3:00 PM - 6:00 PM" }
    ],
    fees: {
      course: "Contact Accordingly",
      installments: "Installments Available",
      includes: ["NCERT Materials", "Medical Physics Notes", "Mock Test Series", "Online Lectures"]
    },
    successStats: {
      selections: "200+ NEET Qualifiers",
      topScore: "715/720 (2024)",
      averageScore: "650+",
      passRate: "89%"
    }
  },
  'cbse': {
    id: 'cbse',
    title: "CBSE 11th & 12th",
    subtitle: "Complete board exam preparation",
    icon: BookOpen,
    color: "from-green-600 to-blue-600",
    description: "Comprehensive CBSE Physics preparation for Class 11th and 12th with focus on board exam excellence and competitive exam foundation.",
    duration: "2 Years (Separate batches)",
    batchSize: "12-15 Students",
    features: [
      "CBSE Board Exam Pattern",
      "Practical Knowledge & Lab Work",
      "Assignment Practice & Tests",
      "Project Work Guidance",
      "Internal Assessment Support",
      "Competitive Exam Foundation"
    ],
    detailedFeatures: {
      "Class 11th Syllabus": [
        "Physical World & Measurement",
        "Kinematics & Laws of Motion",
        "Work, Energy & Power",
        "System of Particles & Rotational Motion",
        "Gravitation & Mechanical Properties",
        "Thermodynamics & Kinetic Theory",
        "Oscillations & Waves"
      ],
      "Class 12th Syllabus": [
        "Electric Charges & Fields",
        "Electrostatic Potential & Capacitance",
        "Current Electricity & Moving Charges",
        "Magnetism & Electromagnetic Induction",
        "Alternating Current & EM Waves",
        "Ray & Wave Optics",
        "Dual Nature & Atoms, Nuclei"
      ],
      "Board Exam Preparation": [
        "Chapter-wise Test Series",
        "Sample Paper Practice",
        "Previous Year Solutions",
        "Marking Scheme Understanding",
        "Answer Writing Techniques"
      ]
    },
    schedule: [
      { day: "Monday", topics: "Theory Classes", time: "3:30 PM - 5:30 PM" },
      { day: "Tuesday", topics: "Numerical Problems", time: "3:30 PM - 5:30 PM" },
      { day: "Wednesday", topics: "Practical Sessions", time: "3:30 PM - 5:30 PM" },
      { day: "Thursday", topics: "Revision & Tests", time: "3:30 PM - 5:30 PM" },
      { day: "Friday", topics: "Doubt Clearing", time: "3:30 PM - 5:30 PM" },
      { day: "Saturday", topics: "Assignment Review", time: "2:00 PM - 4:00 PM" }
    ],
    fees: {
      course: "Contact Accordingly",
      installments: "Installments Available",
      includes: ["NCERT Solutions", "Reference Books", "Lab Manual", "Test Papers"]
    },
    successStats: {
      selections: "95% Above 90%",
      topScore: "98% (2024)",
      averageScore: "92%",
      passRate: "100%"
    }
  }
};


