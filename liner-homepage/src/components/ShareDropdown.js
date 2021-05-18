import React, { useEffect, useRef, useState } from 'react';
import '../styles/Dropdown.css';

import ShareModal from './ShareModal';

function ShareDropdown({ link }) {
  const node = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [title, setTitle] = useState('');

  const handleClick = (e) => {
    if (!isOpen && (!node.current || !node.current.contains(e.target)))
      setIsOpen(false);
  };

  const handleModal = (txt) => {
    setIsOpen(false);
    setIsModal(true);
    setTitle(txt);
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <div className="share-container" ref={node}>
        <button
          className="btn-share page-btn icon"
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
                  onClick={() => handleModal('Share Full Text with Highlights')}
                >
                  <div className="check-mark"></div>
                  <span className="lang">Full text with highlights</span>
                </li>
                <li
                  className={'dd-item more'}
                  onClick={() => handleModal('Share Highlight Summary')}
                >
                  <div className="check-mark"></div>
                  <span className="lang">Highlight summary</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <ShareModal
        link={link}
        isOpen={isModal}
        setIsOpen={setIsModal}
        title={title}
        description="Anyone with link can view this page with highlights."
      />
    </>
  );
}

export default ShareDropdown;
