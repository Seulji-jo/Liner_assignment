import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dropdown.css';

function LanguageDropdown() {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [checkEng, setCheckEng] = useState(true);
  const [checkKor, setCheckKor] = useState(false);
  const [checkSimpleChi, setCheckSimpleChi] = useState(false);
  const [checkChi, setCheckChi] = useState(false);
  const [checkJap, setCheckJap] = useState(false);
  const [checkO, setCheckO] = useState(false);

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
    <div ref={node} className="languages-container">
      <button className="languages" onClick={(e) => setIsOpen(!isOpen)}>
        Languages
        <div
          className={isOpen ? 'languages-drop' : 'languages-drop open'}
        ></div>
      </button>
      {isOpen && (
        <div className="dd-container">
          <div className="dd-dropdown lang">
            <ul>
              <li className="dd-title-container">
                <h3 className="dd-title rec-title">Select for feed</h3>
              </li>
              <li
                className={checkEng ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckEng(!checkEng)}
              >
                <span className="lang">English</span>
                <div className="check-mark"></div>
              </li>
              <li
                className={checkKor ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckKor(!checkKor)}
              >
                <span className="lang">한국어</span>
                <div className="check-mark"></div>
              </li>
              <li
                className={checkSimpleChi ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckSimpleChi(!checkSimpleChi)}
              >
                <span className="lang">简体字</span>
                <div className="check-mark"></div>
              </li>
              <li
                className={checkChi ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckChi(!checkChi)}
              >
                <span className="lang">繁體字</span>
                <div className="check-mark"></div>
              </li>
              <li
                className={checkJap ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckJap(!checkJap)}
              >
                <span className="lang">日本語</span>
                <div className="check-mark"></div>
              </li>
              <li
                className={checkO ? 'dd-item active' : 'dd-item'}
                onClick={() => setCheckO(!checkO)}
              >
                <span className="lang">Others</span>
                <div className="check-mark"></div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
