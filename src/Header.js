import React, { useState, useEffect } from 'react';

function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Actualiza la fecha cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <header style={{ position: 'absolute', top: 0, left: 0 }}>
      <div className='container'>
        <div className='fechaIzquierda'>
          <p>{formattedDate}</p>
        </div>
        <div className='tituloMedio'>
          <h1 style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>teatrify</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;