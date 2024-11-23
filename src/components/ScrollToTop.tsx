import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <button
   
    onClick={scrollToTop}
    className="fixed bottom-8 right-8 p-4  text-white rounded-full transition-all duration-300 backdrop-blur-sm"
  >
    <div className="flex items-center" >
    <img src='https://mcusercontent.com/17635adc15e4488859eb5650d/images/1c680c27-edb3-a3ae-9d79-8c3a4d7e8a1e.png' width={80} height={80} />
    <ArrowUp size={24} />
    </div>
  </button>
  
) : null;
}