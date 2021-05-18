import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/RecContainer.css';

function RecommendationContainer({ title, tags, articles }) {
  const [trendingPages, settrendingPages] = useState([]);

  useEffect(() => {
    if (articles) {
      const newArticles = articles.reduce((result, article, i) => {
        if (i < 5) result.push(article);
        return result;
      }, []);
      settrendingPages(newArticles);
    }
  }, []);

  const renderContents = () => {
    if (tags) {
      return (
        <div className="rec-tags-container">
          {tags.map((tag, i) => (
            <Link to="/" key={i} className="rec-tag">
              #{tag}
            </Link>
          ))}
        </div>
      );
    }
    if (trendingPages.length > 0) {
      return (
        <div className="rec-article-container">
          {trendingPages.map((article) => (
            <Link to="/" key={article.id} className="rec-article">
              {article.tags.length > 0 ? (
                <div className="rec-article-tag-list">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="rec-article-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="rec-article-title">{article.title}</div>
              <div className="rec-article-link">{article.link}</div>
            </Link>
          ))}
          <div className="show-more">Show More</div>
        </div>
      );
    } else {
      return (
        <div className="rec-article-container no-pages">
          <div className="no-pages">No Pages</div>
        </div>
      );
    }
  };
  return (
    <div className="rec-container">
      <div className="rec-title-container">
        <h3 className="rec-title">{title}</h3>
      </div>
      <div className="rec-contents">{renderContents()}</div>
    </div>
  );
}

export default RecommendationContainer;
