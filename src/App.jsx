 import React from 'react';
import './App.css';

function App() {
  const aulas = [
    { id: '01', titulo: 'Introduction', tempo: '12 min' },
    { id: '02', titulo: 'Landscape', tempo: '18 min' },
    { id: '03', titulo: 'Perspective', tempo: '24 min' },
  ];

  return (
    <div className="iphone-container">
      
      <header className="header-pink">
        <div className="nav-icons">
          <span>☰</span>
          <h2 className="brand">DesignCourses</h2>
          <span>👤</span>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <h1 className="hero-title">What do you want to learn?</h1>

        <div className="category-row">
          <div className="category-card">
            <div className="icon-bg">📸</div>
            <p>Photography</p>
          </div>
          <div className="category-card active">
            <div className="icon-bg">🏠</div>
            <p>3D</p>
          </div>
          <div className="category-card">
            <div className="icon-bg">🎨</div>
            <p>Illustration</p>
          </div>
        </div>
      </header>

     
      <main className="content-white">
        <div className="content-title">
          <div>
            <h3>Illustration</h3>
            <span>Course Content</span>
          </div>
          <span className="arrow-pink">❯</span>
        </div>

        <div className="lesson-list">
          {aulas.map((aula) => (
            <div key={aula.id} className="lesson-item">
              <span className="lesson-number">{aula.id}</span>
              <div className="lesson-info">
                <h4>{aula.titulo}</h4>
                <p>Detailed explanation about {aula.titulo} in design...</p>
                <small>{aula.tempo}</small>
              </div>
              <button className="btn-play">▶</button>
            </div>
          ))}
        </div>

        <button className="btn-buy">Buy now</button>
      </main>
    </div>
  );
}

export default App;