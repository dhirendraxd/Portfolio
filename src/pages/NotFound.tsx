import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 - Page Not Found | Dhirendra Singh Dhami";
    
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
