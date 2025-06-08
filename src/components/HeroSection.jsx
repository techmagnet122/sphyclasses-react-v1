import { Award, ArrowRight, Brain } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Because <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Physics</span> Matters
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Master Physics for NEET, IIT-JEE & CBSE (11th & 12th) with expert guidance from IIT faculty
              </p>
            </div>

            <div className="bg-white shadow-gray-400 dark:shadow-gray-800 border-2 border-gray-200 dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-24 h-24 bg-gradient-to-br rounded-full flex items-center justify-center">
                  <img 
                  src='https://sphyclasses-v1.s3.ap-south-1.amazonaws.com/assets/bishwajitjpeg.jpeg'
                  className='w-24 h-18 rounded-full'
                  alt='sharmabiswajit'
                  loading='eager'
                  
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Dr. Bishwajit Sharma</h3>
                  <p className="text-gray-600 dark:text-gray-300">Ex-IIT Bombay, Ex-IIT-ISM Dhanbad, Professor</p>
                </div>
              </div>
              <div className="space-y-2 text-md text-gray-600 dark:text-gray-300">
                <p>• 10+ years of experience</p>
                <p>• M.Tech & Ph.D (Fluid Dynamics & Heat Transfer), NIT Durgapur</p>
                <p>• GATE & NDA/NA Exam Qualified</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Learning</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Free Demo Class
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
              <div className="text-center space-y-6">
                <Brain className="w-24 h-24 mx-auto text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Learn & Visualize</h3>
                <p className="text-gray-600 dark:text-gray-300">Experience physics through interactive learning modules</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;