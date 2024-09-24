import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Start.css';
import ruraq_logo from '/public/img/ruraq-logo.svg';

export default function Start() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`startBack ${isLoading ? 'loading' : ''}`}>
      <div className='startLogo'>
        <img src={ruraq_logo} alt="Ruraq Logo" />
      </div>
    </div>
  );
}