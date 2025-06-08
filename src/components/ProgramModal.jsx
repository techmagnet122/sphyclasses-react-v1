import { X, CheckCircle, Clock, Users, Award, TrendingUp, Star, Calendar, Phone, Mail } from 'lucide-react';

export const ProgramModal = ({ program, isOpen, onClose }) => {
  if (!isOpen || !program) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <program.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{program.title}</h2>
              <p className="text-white/90">{program.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
              <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Duration</h4>
              <p className="text-gray-600 dark:text-gray-300">{program.duration}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Batch Size</h4>
              <p className="text-gray-600 dark:text-gray-300">{program.batchSize}</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl text-center">
              <Award className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Success Rate</h4>
              <p className="text-gray-600 dark:text-gray-300">{program.successStats.passRate}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Program</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">{program.description}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {program.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Detailed Curriculum</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(program.detailedFeatures).map(([category, items]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Weekly Schedule</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <div className="space-y-4">
                {program.schedule.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-600 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900 dark:text-white">{day.day}</span>
                      <span className="text-gray-600 dark:text-gray-300">{day.topics}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{day.time}</span>
                  </div>
                ))}
              </div>
            <p className='font-bold mx-6'>** Schedule and Units wise plan are subject to change according to Batch Progress</p>
            </div>
          </div>

          {/* Success Statistics */}
         

          {/* Fees Structure */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fees Structure</h3>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Course Fee</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{program.fees.course}</div>
                  <p className="text-gray-600 dark:text-gray-300">{program.fees.installments}</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">What's Included</h4>
                  <ul className="space-y-2">
                    {program.fees.includes.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
            <p className="mb-4">Contact us for admission and more details</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

