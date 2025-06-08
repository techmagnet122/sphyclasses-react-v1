import { Brain, TrendingUp, Users, Award, Target, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Teaching Module",
      description: "Interactive and engaging physics lessons with real-world applications",
      icon: Brain
    },
    {
      title: "Individual Performance Tracking",
      description: "Monitor your progress with detailed analytics and personalized feedback",
      icon: TrendingUp
    },
    {
      title: "Free Career Counselling",
      description: "Get expert guidance on your career path and college selection",
      icon: Users
    },
    {
      title: "Free Olympiad Preparation",
      description: "Additional preparation for physics olympiads and competitive exams",
      icon: Award
    },
    {
      title: "NDA-NA Exam Preparation",
      description: "Specialized coaching for defense academy entrance exams",
      icon: Target
    },
    {
      title: "IIT/NIT/MAANG Mentorship",
      description: "Free mentorship from current employees of top companies and institutes",
      icon: Globe
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Experience the difference with our unique features</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-2xl border shadow-md shadow-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 dark:shadow-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;