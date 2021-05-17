import react, { useEffect, useState } from 'react';
import '../styles/InfoModal.css';

function InfoModal({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(page);
  const [description, setDescription] = useState('');

  useEffect(() => {
    let paragraph;
    if (page === 'For You') {
      paragraph = `We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets.`;
    } else if (page === 'My Highlights') {
      paragraph = `All your work, including highlights and comments will be safely stored on this page.`;
    }
    setDescription(paragraph);
  }, [page]);
  return (
    <div className="info">
      <button className="btn-info" onClick={() => setIsOpen(!isOpen)}>
        info
      </button>
      {isOpen && (
        <div className="dd-container info-container">
          <div className="dd-dropdown info-modal">
            <button
              className="btn-close info"
              onClick={() => setIsOpen(false)}
            ></button>
            <div className="img-container"></div>
            <div className="info-txt">
              <h5 className="info-title">{title}</h5>
              <p className="info-description">{description}</p>
            </div>
          </div>
          <div className="info-triangle"></div>
        </div>
      )}
    </div>
  );
}

export default InfoModal;
