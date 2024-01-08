// Home.jsx
import React, { useState, useEffect } from 'react';
import TypeWriter from "../Type/TypeWriter"

function Home() {
  const [showNia, setShowNia] = useState(true);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowNia(false);
      setStartTyping(true);
    }, 1000); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="home" className='h-screen flex justify-center items-center'>
      <div className="text-white w-1/2 text-3xl lg:text-7xl">
        <p>
          Hello there 👋🏼, I'm {showNia ? <span className="text-fuchsia-600">Nia</span> : ''}
          {startTyping && <TypeWriter text=" a Mechanical Computational Engineer" delay={100} infinite={false} />}
        </p>
      </div>
    </div>
  );
}

export default Home;