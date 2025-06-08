import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arjun Kumar",
      //achievement: "AIR 47 in JEE Advanced",
      text: "Dr. Sharma's teaching methodology is exceptional. His way of explaining complex physics concepts made everything crystal clear. Thanks to his guidance.",
      rating: 5
    },
    {
      name: "Priya Singh",
      // achievement: "NEET Qualifier - AIIMS Delhi",
      text: "The individual attention and personalized study plan helped me overcome my weak areas in physics. The mentorship program was invaluable for my preparation strategy.",
      rating: 5
    },
    {
      name: "Rohit Sharma",
      //achievement: "IIT Bombay CSE",
      text: "The smart teaching modules and visualization techniques made physics my strongest subject. Dr. Sharma's experience really shows in his teaching approach.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Hear from our successful students</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  {/* <p className="text-blue-600 dark:text-blue-400 font-semibold">{testimonial.achievement}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection