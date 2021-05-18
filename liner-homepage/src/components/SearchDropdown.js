import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dropdown.css';

function SearchDropdown() {
  const node = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const options = ['Ttile', 'URL', 'Highlight', 'Description', 'Comment'];

  const renderOption = () => {
    return options.map((option, i) => {
      return (
        <li key={i} className={'dd-item active'}>
          <span className="lang">{option}</span>
          <div className="check-mark"></div>
        </li>
      );
    });
  };
  const handleClick = (e) => {
    if (!isOpen && (!node.current || !node.current.contains(e.target)))
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={node} className="search-container">
      <button className="search-option" onClick={(e) => setIsOpen(!isOpen)}>
        Search Option
        <div
          className={isOpen ? 'languages-drop' : 'languages-drop open'}
        ></div>
      </button>
      {isOpen && (
        <div className="dd-container">
          <div className="dd-dropdown">
            <ul>
              <li className="dd-title-container">
                <h3 className="dd-title rec-title">Select for feed</h3>
              </li>
              {renderOption()}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchDropdown;
