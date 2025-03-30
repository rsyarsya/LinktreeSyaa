import {
  Globe,
  Linkedin,
  Instagram,
  Github,
  Mail,
  ExternalLink
} from 'lucide-react';

function App() {
  const email = 'rasyadwarsya93.com';
  const subject = 'Let\'s Collaborate!';
  const body = 'Hi Arsya,\n\nI would like to connect with you regarding...';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 py-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <img
              src="public/pp2.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Rasyadwa Arsya</h1>
          <p className="text-center text-gray-600 max-w-sm px-4">
            Computer Engineering Student at UGM. Passionate about web development and creating innovative solutions through technology.
          </p>
        </div>

        {/* Primary Link */}
        <div className="px-4">
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg group w-full"
          >
            <div className="flex items-center space-x-3">
              <Globe className="w-6 h-6 text-indigo-600" />
              <span className="font-medium text-gray-700">Personal Website</span>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
          </a>
        </div>

        {/* Social Connection Section */}
        <div className="px-4 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
            Let's get to know each other
          </h2>
          
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#0077B5] hover:bg-[#006399] text-white transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg group w-full"
          >
            <div className="flex items-center space-x-3">
              <Linkedin className="w-6 h-6" />
              <span className="font-medium">Connect on LinkedIn</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg group w-full"
          >
            <div className="flex items-center space-x-3">
              <Instagram className="w-6 h-6" />
              <span className="font-medium">Follow on Instagram</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#24292e] hover:bg-[#1b1f23] text-white transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg group w-full"
          >
            <div className="flex items-center space-x-3">
              <Github className="w-6 h-6" />
              <span className="font-medium">Check out my GitHub</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Contact Section */}
        <div className="px-4 pt-6">
          <p className="text-center text-gray-600 mb-4">
            Interested in collaborating? Let's connect via Gmail!
          </p>
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 rounded-xl p-4 shadow-md hover:shadow-lg group w-full"
          >
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="font-medium">Send me an email</span>
            </div>
            <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;