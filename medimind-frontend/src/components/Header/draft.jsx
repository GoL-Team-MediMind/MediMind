import React, { useState } from 'react';
// import './styles.css'; // import CSS file with custom styles

function App() {
  const [currentPage, setCurrentPage] = useState('page1');

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="button-container">
        <button
          className={currentPage === 'page1' ? 'active' : ''}
          onClick={() => handleButtonClick('page1')}
        >
          Page 1
        </button>
        <button
          className={currentPage === 'page2' ? 'active' : ''}
          onClick={() => handleButtonClick('page2')}
        >
          Page 2
        </button>
      </div>
      {currentPage === 'page1' && (
        <div className="page">
          <h1>Page 1</h1>
          <p>This is page 1</p>
        </div>
      )}
      {currentPage === 'page2' && (
        <div className="page">
          <h1>Page 2</h1>
          <p>This is page 2</p>
        </div>
      )}
    </div>
  );
}

export default App;