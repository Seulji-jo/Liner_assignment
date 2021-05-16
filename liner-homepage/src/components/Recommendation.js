import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../styles/Recommendation.css';

import RecommendationContainter from './RecContainer';
import { tags, fakeDatas } from '../fakeData';

function Recommendation({ page }) {
  const renderContents = () => {
    if (page === 'home') {
      return (
        <>
          <RecommendationContainter title="Trending Keywords" tags={tags} />
          <RecommendationContainter
            title="Trending Pages"
            articles={fakeDatas}
          />
        </>
      );
    }
    if (page === 'my highlights') {
      return (
        <>
          <RecommendationContainter
            title="People Also Read"
            // articles={fakeDatas}
          />
        </>
      );
    } else return null;
  };
  return (
    <aside>
      <div className="recommendation">
        <div className="welcome-pkg">
          <h3 className="welcome-pkg-title">Welcome Package</h3>
          <div className="welcome-pkg-description">
            Your <b>72% Discount</b> offer ends in 6 days
          </div>
          <div className="welcome-pkg-icon">Welcome Package icon</div>
          <div className="welcome-pkg-btn">
            <Link to="/">Redeem Offer</Link>
          </div>
        </div>
        {renderContents()}
      </div>
    </aside>
  );
}

export default Recommendation;
