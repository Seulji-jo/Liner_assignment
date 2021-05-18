import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import '../styles/MyHighlights.css';

import Recommendation from './Recommendation';
import Highlights from './Highlights';
import Tags from './Tags';
import FilterModal from './FilterModal';
import { myhighlights } from '../fakeData';
import InfoModal from './InfoModal';
import SearchDropdown from './SearchDropdown';

function MyHighlights() {
  const node = useRef(null);
  // const [isSticky, setIsSticky] = useState(false);
  const [focus, setFocus] = useState(false);

  let hlData = myhighlights.filter((hl) => hl.highlight);

  const handleClick = (e) => {
    if (!focus && (!node.current || !node.current.contains(e.target)))
      setFocus(false);
  };

  // const handleScroll = () => {
  //   if (window.pageYOffset > 39) {
  //     setIsSticky(true);
  //   } else if (window.pageYOffset <= 39 && window.pageYOffset >= 0) {
  //     setIsSticky(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     // 리스너를 해재해 주었다
  //     window.addEventListener('scroll', handleScroll);
  //   };
  // });

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <main>
      <div className="main foryou">
        <div className="highlights-title">
          <div className="sticky-container">
            <div className="title-container">
              <h1 className="title">My Highlights</h1>
              <InfoModal page="My Highlights" />
            </div>
            <button className="btn-pdf">+ PDF</button>
          </div>
        </div>
        <div className="subtitle-container">
          <h3 className="sub-title highlights">{myhighlights.length} Pages</h3>
          <h3 className="sub-title highlights">•</h3>
          <h3 className="sub-title highlights">{hlData.length} Highlights</h3>
        </div>

        <section className="highlights-section">
          <div className="section-header">
            {!focus && (
              <div className="tab-container">
                <NavLink to="/myhighlights/highlights" activeClassName="active">
                  Highlights
                </NavLink>
                <NavLink to="/myhighlights/tags" activeClassName="active">
                  Tags
                </NavLink>
              </div>
            )}
            <div ref={node} className="finders-container">
              {focus ? <SearchDropdown /> : <FilterModal />}
              <div
                className={
                  focus ? 'hl-search-wrapper focus' : 'hl-search-wrapper'
                }
              >
                <div className="hl-search-container">
                  <input
                    type="text"
                    className="hl-search"
                    placeholder="Search my highlights"
                    onClick={() => setFocus(true)}
                  />
                  <button className="btn-search icon">search</button>
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/myhighlights/highlights" component={Highlights} />
            <Route exact path="/myhighlights/tags" component={Tags} />
          </Switch>
        </section>
      </div>
      <Recommendation page="my highlights" />
    </main>
  );
}

export default MyHighlights;
