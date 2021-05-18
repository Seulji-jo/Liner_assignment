import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

function ExportModal({ link }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    }
    return () => {
      // 스크롤 방지 해제
      document.body.style.overflow = 'scroll';
    };
  });

  return (
    <div className="export-container">
      <button
        className="btn-export page-btn icon"
        onClick={(e) => setIsOpen(!isOpen)}
      >
        share
      </button>
      {isOpen && (
        <div className="modal-container">
          <div className="dim" onClick={() => setIsOpen(false)}></div>
          <div className="modal-dropdown">
            <div className="modal-txt">
              <div className="modal-header">
                <h2 className="modal-title">Export</h2>
                <button
                  className="btn-close icon"
                  onClick={() => setIsOpen(false)}
                >
                  close
                </button>
              </div>
              <div className="export-body">
                <p className="export-txt modal-description">
                  Export your highlights
                </p>
                <div className="modal-list-container export">
                  <div className="export-file-container ">
                    <button className="export-file modal-list"></button>
                    <span className="file">Word</span>
                  </div>
                  <div className="export-file-container">
                    <button className="export-file modal-list"></button>
                    <span className="file">OneNote</span>
                  </div>
                  <div className="export-file-container">
                    <button className="export-file modal-list"></button>
                    <span className="file">Evernote</span>
                  </div>
                  <div className="export-file-container">
                    <button className="export-file modal-list"></button>
                    <span className="file">Text</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExportModal;
