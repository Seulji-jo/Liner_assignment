import React, { useEffect, useState } from 'react';
import '../styles/Modal.css';

function ShareModal({ link }) {
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
    <div className="share-container">
      <button
        className="btn-share page-btn icon"
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
                <h2 className="modal-title">Share Original Page</h2>
                <button
                  className="btn-close icon"
                  onClick={() => setIsOpen(false)}
                >
                  close
                </button>
              </div>
              <div className="share-sns-lists">
                <a
                  className="share-sns fb"
                  href="https://www.facebook.com/dialog/share?app_id=808110669244168&display=popup&href=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4&redirect_uri=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook
                </a>
                <a
                  className="share-sns twitter"
                  href="https://twitter.com/intent/tweet?text=%EC%97%AC%ED%96%89%EA%B3%84%ED%9A%8D%2C%20%ED%98%BC%EC%9E%90%20%EC%84%B8%EC%9A%B8%20%ED%95%84%EC%9A%94%20%EC%97%86%EB%8B%A4%20-%20Korea%20Real%20Time%20Korean%20-%20WSJ&url=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
                <a
                  className="share-sns in"
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4"
                  target="_blank"
                  rel="noreferrer"
                >
                  linked in
                </a>
                <a
                  className="share-sns fbm"
                  href="https://www.facebook.com/dialog/send?app_id=808110669244168&link=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4&redirect_uri=https%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook msg
                </a>
                <a
                  className="share-sns line"
                  href="https://access.line.me/oauth2/v2.1/login?loginState=07AQBLsOMIb9UDY9myL6BS&loginChannelId=1446101138&returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fscope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253Dhttps%2525253A%2525252F%2525252Frealtime.wsj.com%2525252Fkorea%2525252F2011%2525252F11%2525252F22%2525252F%25252525EC%2525252597%25252525AC%25252525ED%2525252596%2525252589%25252525EA%25252525B3%2525252584%25252525ED%252525259A%252525258D-%25252525ED%2525252598%25252525BC%25252525EC%252525259E%2525252590-%25252525EC%2525252584%25252525B8%25252525EC%252525259A%25252525B8-%25252525ED%2525252595%2525252584%25252525EC%252525259A%2525252594-%25252525EC%2525252597%2525252586%25252525EB%252525258B%25252525A4%26state%3Ded0ceedc9c6febb72612b57af22be7%26client_id%3D1446101138#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  line
                </a>
                <a
                  className="share-sns mail"
                  href="mailto:?body=%EC%97%AC%ED%96%89%EA%B3%84%ED%9A%8D%2C%20%ED%98%BC%EC%9E%90%20%EC%84%B8%EC%9A%B8%20%ED%95%84%EC%9A%94%20%EC%97%86%EB%8B%A4%20-%20Korea%20Real%20Time%20Korean%20-%20WSJhttps%3A%2F%2Frealtime.wsj.com%2Fkorea%2F2011%2F11%2F22%2F%25EC%2597%25AC%25ED%2596%2589%25EA%25B3%2584%25ED%259A%258D-%25ED%2598%25BC%25EC%259E%2590-%25EC%2584%25B8%25EC%259A%25B8-%25ED%2595%2584%25EC%259A%2594-%25EC%2597%2586%25EB%258B%25A4"
                  target="_blank"
                  rel="noreferrer"
                >
                  mail
                </a>
              </div>
            </div>
            <div className="modal-bottom">
              <input type="text" className="link-input" value={link} readonly />
              <button className="link-copy modal-btn">Copy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareModal;
