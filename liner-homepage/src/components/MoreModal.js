import React, { useEffect, useRef, useState } from 'react';
import '../styles/Modal.css';

function MoreModal({ isOpen, close, txt }) {
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
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="dim" onClick={() => close(false)}></div>
          <div className="modal-dropdown more">
            <div className="modal-txt">
              <div className="modal-header">
                <h2 className="modal-title">Are You Sure?</h2>
                <button className="btn-close icon" onClick={() => close(false)}>
                  close
                </button>
              </div>
              <p className="modal-description">
                Do you
                {txt[0] == 'h' ? ` really want to ${txt}?` : ` want to ${txt}?`}
                <br />
                This action cannot be undone.
              </p>
            </div>

            <div className="modal-btn-container">
              <button className="modal-btn cancel" onClick={() => close(false)}>
                Cancel
              </button>
              {txt === 'hide this page' ? (
                <button
                  className="modal-btn confirm hide"
                  onClick={() => close(false)}
                >
                  Hide
                </button>
              ) : (
                <button
                  className="modal-btn confirm ok"
                  onClick={() => close(false)}
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MoreModal;
