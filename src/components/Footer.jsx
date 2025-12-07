import { Zap, ExternalLink, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const learningResources = [
    { name: "NCERT Physics", url: "https://ncert.nic.in/textbook.php?keph1=0-13" },
    { name: "Khan Academy Physics", url: "https://www.khanacademy.org/science/physics" },
    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/physics/" },
    { name: "PhET Simulations", url: "https://phet.colorado.edu/" },
    { name: "JEE Main Official", url: "https://jeemain.nta.nic.in/" },
    { name: "NEET Official", url: "https://neet.nta.nic.in/" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">SphyClasses</h3>
                <p className="text-sm text-gray-400">Because Physics Matters</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">IIT-JEE Preparation</span></li>
              <li><span className="text-gray-400">NEET Physics</span></li>
              <li><span className="text-gray-400">CBSE 11th & 12th</span></li>
              <li><span className="text-gray-400">NDA-NA Exam</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Learning Resources</h4>
            <ul className="space-y-2">
              {learningResources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1">
                    <span>{resource.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SphyClasses. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Empowering students to excel in Physics
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <span>Developed and Managed By, </span>
            <span>
                <Link
                to="/errorPage"
                className='text-yellow-300'
                target='__blank'>NavGati</Link> Pvt. Ltd.
                </span>
          </p>
          <p className='text-gray-500'>
            Ranchi, Jharkhand
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;