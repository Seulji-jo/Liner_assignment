import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Page.css';
import noFavicon from '../img/favicon.svg';

import AddTagsDropdown from './AddTagsDropdown';
import ShareModal from './ShareModal';
import MoreDropdown from './MoreDropdown';

function Page({ data }) {
  const { id, title, link, url, highlight, description, imgSrc, favicon } =
    data;

  const [onSaved, setOnSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const renderHighlight = () => {
    if (highlight) {
      return <p className="page-highlight">{highlight}</p>;
    } else if (description) {
      return <p className="page-highlight">{description}</p>;
    } else return null;
  };

  return (
    <article className="page-container">
      <div
        className={
          imgSrc ? 'page-content-container' : 'page-content-container no-img'
        }
      >
        <div className="page-content">
          <h2 className="page-title">
            <Link to={`/pages/${id}`}>{title}</Link>
          </h2>
          {renderHighlight()}
        </div>
        {imgSrc ? (
          <Link to="/" className="page-img-container">
            <img src={imgSrc} alt={`${title} image`} className="page-img" />
          </Link>
        ) : null}
      </div>
      <div className="page-details">
        <div className="page-link">
          <img
            src={favicon ? favicon : noFavicon}
            alt="favicon"
            className="page-favicon"
          />
          <a href={url} target="_blank">
            {link}
          </a>
        </div>
        <div className="page-detail-btns">
          <div className="saved-container">
            {onSaved && <AddTagsDropdown />}
            <button
              className={
                onSaved
                  ? 'btn-save page-btn icon active'
                  : 'btn-save page-btn icon'
              }
              onClick={() => setOnSaved(!onSaved)}
            >
              saved
            </button>
          </div>
          <div className="share-container">
            <button
              className="btn-share page-btn icon"
              onClick={(e) => setIsOpen(!isOpen)}
            >
              share
            </button>
            <ShareModal
              link={url}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              title="Share Original Page"
            />
          </div>
          <MoreDropdown />
        </div>
      </div>
    </article>
  );
}

export default Page;
