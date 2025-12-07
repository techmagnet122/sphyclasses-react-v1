
import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-gray-100 relative overflow-hidden">
      {/* Animated blue/grey blobs */}
      <div className="absolute -left-16 -top-16 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl animate-blob mix-blend-multiply" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gray-300/40 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply" />
      <div className="absolute left-1/2 top-0 w-40 h-40 bg-blue-400/30 rounded-full blur-2xl animate-blob animation-delay-4000 mix-blend-multiply" />


      <div className="max-w-2xl mx-auto p-8 md:p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-200 text-center relative overflow-hidden">
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 animate-spin-slow shadow-lg">
            <Wrench size={44} strokeWidth={2.2} />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700">Operational Issue</h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          We’re experiencing an operational issue.<br />
          <span className="text-blue-600 font-semibold">We’ll be right back in a month.</span>
        </p>

        {/* TechMagnet to NavGati message */}
        <div className="mb-6 mt-2">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-semibold shadow-sm animate-fade-in">
            We are making a big jump — <span className="font-bold">TechMagnet</span> has moved to <span className="font-bold">NavGati</span>!
          </span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
            Go Home
          </Link>
          
        </div>

        <div className="mt-8 text-xs text-gray-500">
          Expected restore: <span className="font-semibold text-blue-700">~1 month</span>
        </div>

        {/* Animated Coming Soon at very bottom */}
        <div className="absolute left-0 right-0 bottom-2 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-700 tracking-widest animate-coming-soon">We are Almost There</span>
            <span className="block w-2 h-2 rounded-full bg-blue-400 animate-pulse animation-delay-2000"></span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-20px) scale(1.05); }
          66% { transform: translateY(20px) scale(0.95); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 6s linear infinite; }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes coming-soon {
          0%,100% { letter-spacing: .2em; color: #2563eb; }
          50% { letter-spacing: .4em; color: #1e40af; }
        }
        .animate-coming-soon { animation: coming-soon 2.2s infinite alternate; }
      `}</style>
    </div>
  )
}
