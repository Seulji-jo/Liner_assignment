import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Page.css';
import '../styles/HlPage.css';
import noFavicon from '../img/favicon.svg';

import ExportModal from './ExportModal';
import ShareModal from './ShareModal';
import MoreDropdown from './MoreDropdown';
import ShareDropdown from './ShareDropdown';

function Page({ data }) {
  const {
    tags,
    title,
    link,
    url,
    highlight,
    description,
    imgSrc,
    favicon,
    createdAt,
  } = data;

  const [onSaved, setOnSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSaved = () => {
    setOnSaved(!onSaved);
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
            <Link to="/">{title}</Link>
          </h2>
          <div className="highlight-container">
            {highlight && (
              <>
                <div className="highlight"></div>
                <p className="page-highlight">{highlight}</p>
              </>
            )}
          </div>
        </div>
        {imgSrc ? (
          <Link to="/" className="page-img-container">
            <img src={imgSrc} alt={`${title} image`} className="page-img" />
          </Link>
        ) : null}
      </div>
      <div className="page-tags">
        <span className="tag-img">tag</span>
        {tags && tags.map((tag) => <span className="tag">{tag}</span>)}
        <button className="edit-tag">Edit Tag</button>
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
          <span className="slice">|</span>
          <span className="created-at">{createdAt}</span>
        </div>
        <div className="page-detail-btns">
          <ShareDropdown link={url} />
          <ExportModal />
          <MoreDropdown title={title} link={url} />
        </div>
      </div>
    </article>
  );
}

export default Page;
