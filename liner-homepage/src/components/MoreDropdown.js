import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dropdown.css';

import MoreModal from './MoreModal';

function MoreDropdown() {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalTxt, setModalTxt] = useState('');

  const handleClick = (e) => {
    if (!isOpen && (!node.current || !node.current.contains(e.target)))
      setIsOpen(false);
  };

  const handleModal = (txt) => {
    setIsOpen(false);
    setIsModal(true);
    setModalTxt(txt);
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <div className="more-container" ref={node}>
        <button
          className="btn-more page-btn icon"
          onClick={(e) => setIsOpen(!isOpen)}
        >
          more
        </button>
        {isOpen && (
          <div className="dd-container">
            <div className="dd-dropdown more">
              <ul>
                <li
                  className="dd-item more"
                  onClick={() => handleModal('see more pages like this')}
                >
                  <div className="check-mark"></div>
                  <span className="lang">More pages like this</span>
                </li>
                <li
                  className={'dd-item more'}
                  onClick={() => handleModal('see fewer pages like this')}
                >
                  <div className="check-mark"></div>
                  <span className="lang">Fewer pages like this</span>
                </li>
                <li
                  className={'dd-item more'}
                  onClick={() => handleModal('hide this page')}
                >
                  <div className="check-mark"></div>
                  <span className="lang">Hide this page</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <MoreModal isOpen={isModal} close={setIsModal} txt={modalTxt} />
    </>
  );
}

export default MoreDropdown;
