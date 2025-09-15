import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, Coffee, Bug, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Oops! Lost in Cyberspace | Dhirendra Singh Dhami";
    
    // Add noindex meta tag for 404 pages
    const noindexMeta = document.createElement('meta');
    noindexMeta.name = 'robots';
    noindexMeta.content = 'noindex, nofollow';
    noindexMeta.setAttribute('data-404', 'true');
    document.head.appendChild(noindexMeta);
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Sarcastic console message for developers
    console.log(
      `%c🤦‍♂️ Well, well, well...`, 
      'color: #ef4444; font-size: 16px; font-weight: bold;'
    );
    console.log(
      `%cSomeone's trying to access "${location.pathname}" 🕵️‍♀️`, 
      'color: #06b6d4; font-size: 14px;'
    );
    console.log(
      `%cEither you're testing my 404 page (smart!) or genuinely lost (oops!)`, 
      'color: #8b5cf6; font-size: 12px;'
    );
    console.log(
      `%c💡 Pro tip: Check the network tab to see if you're actually supposed to be here`, 
      'color: #10b981; font-size: 11px;'
    );
    
    // Return cleanup function
    return () => {
      document.title = 'Dhirendra Singh Dhami - Portfolio & Digital Projects';
      const noindexMetaTag = document.querySelector('meta[data-404]');
      if (noindexMetaTag) {
        noindexMetaTag.remove();
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Animated 404 */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-blue-500/20 blur-sm">
            404
          </div>
        </div>

        {/* Sarcastic Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Well, this is embarrassing... 🤦‍♂️
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Congrats! You've discovered a page that doesn't exist. 
            <br />
            <span className="text-blue-400">Even my cybersecurity skills can't find this one.</span>
          </p>
        </div>

        {/* Sarcastic Messages */}
        <div className="card max-w-lg mx-auto p-6 bg-slate-800/60 backdrop-blur-sm border border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <Bug className="text-red-400" size={24} />
            <h3 className="text-lg font-semibold text-white">Error Report:</h3>
          </div>
          <div className="text-left space-y-2 text-gray-300">
            <p>• <strong>Status:</strong> Page missing in action</p>
            <p>• <strong>Cause:</strong> Either you mistyped, or I forgot to build it</p>
            <p>• <strong>Likelihood of recovery:</strong> 0% (it never existed)</p>
            <p>• <strong>Your path:</strong> <code className="text-red-400 bg-slate-900 px-2 py-1 rounded text-sm">{location.pathname}</code></p>
          </div>
        </div>

        {/* Sarcastic Suggestions */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-blue-300">
            🎯 What you can do (instead of staring at this):
          </h3>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <Coffee className="text-yellow-400 mb-2 group-hover:animate-bounce" size={24} />
              <p className="text-gray-300 text-sm">
                Make some coffee and pretend this never happened
              </p>
            </div>
            
            <div className="card p-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors group">
              <Zap className="text-blue-400 mb-2 group-hover:animate-pulse" size={24} />
              <p className="text-gray-300 text-sm">
                Question your life choices that led you here
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors group"
          >
            <Home className="mr-2 group-hover:animate-pulse" size={20} />
            Go Home (Safe Choice)
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            ← Go Back (Risky Move)
          </button>
        </div>

        {/* Easter Egg */}
        <div className="pt-8 border-t border-slate-700">
          <p className="text-gray-500 text-sm">
            <strong>Pro Tip:</strong> If you're a bot, this page wasn't meant for you either. 🤖
            <br />
            <span className="text-xs">Built with curiosity, broken with... well, nothing really.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
