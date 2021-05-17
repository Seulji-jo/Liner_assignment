import React, { useEffect, useRef, useState } from 'react';
import '../styles/Home.css';

import Recommendation from './Recommendation';
import Page from './Page';
import LanguageDropdown from './LangDropdown';
import { fakeDatas } from '../fakeData';
import InfoModal from './InfoModal';

function Home() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 39) {
      setIsSticky(true);
    } else if (window.pageYOffset <= 39 && window.pageYOffset >= 0) {
      setIsSticky(false);
    }
  };

  const renderPageLists = () => {
    return fakeDatas.map((data) => <Page key={data.id} data={data} />);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // 리스너를 해재해 주었다
      window.addEventListener('scroll', handleScroll);
    };
  });

  return (
    <main>
      <div className="main foryou">
        <div className={isSticky ? 'main-title sticky' : 'main-title'}>
          <div
            className={
              isSticky ? 'sticky-container sticky' : 'sticky-container'
            }
          >
            <div className="title-container">
              <h1 className={isSticky ? 'title sticky' : 'title'}>For You</h1>
              {!isSticky && <InfoModal page="For You" />}
            </div>
            <LanguageDropdown />
          </div>
        </div>
        <section>
          <h3 className="sub-title">Picked by LINER, just for you</h3>
          <div className="page-lists">{renderPageLists()}</div>
        </section>
      </div>
      <Recommendation page="home" />
    </main>
  );
}

export default Home;
