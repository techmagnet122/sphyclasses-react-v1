import { useState } from "react";
import { 
  Target, Heart, BookOpen, CheckCircle, ArrowLeft, Clock, 
  Users, Award, Calendar, FileText, Video, BookMarked,
  TrendingUp, Star, Phone, Mail, X
} from 'lucide-react';
import { programsData } from "../helpers/programsData";
import {ProgramModal} from "./ProgramModal"

const ProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    {
      id: 'iit-jee',
      title: "IIT-JEE Preparation",
      description: "Comprehensive JEE Main & Advanced preparation with problem-solving techniques",
      icon: Target,
      features: ["Advanced Problem Solving", "Mock Tests", "Doubt Clearing Sessions"]
    },
    {
      id: 'neet',
      title: "NEET Physics",
      description: "Medical entrance exam focused physics preparation with concept clarity",
      icon: Heart,
      features: ["Medical Physics Focus", "NCERT Coverage", "Previous Year Analysis"]
    },
    {
      id: 'cbse',
      title: "CBSE 11th & 12th",
      description: "Complete board exam preparation with in-depth concept understanding",
      icon: BookOpen,
      features: ["Board Exam Pattern", "Practical Knowledge", "Assignment Practice"]
    }
  ];

  const handleLearnMore = (programId) => {
    setSelectedProgram(programsData[programId]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProgram(null);
  };

  return (
    <>
      <section id="programs" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Choose the right path for your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 dark:shadow-md dark:shadow-gray-700 shadow-gray-300">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleLearnMore(program.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProgramsSection;