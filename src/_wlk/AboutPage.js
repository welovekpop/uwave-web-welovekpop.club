import * as React from 'react';

import FacebookIcon from './icons/Facebook';
import YouTubeIcon from './icons/YouTube';
import InstagramIcon from './icons/Instagram';
import GithubIcon from './icons/Github';
import TwitterIcon from './icons/Twitter';
import SlackIcon from './icons/Slack';

import SocialMediaLink from './SocialMediaLink';

import './AboutPage.css';

export default () => (
  <div className="wlk-AboutPage">
    <h1 className="wlk-AboutPage-title">WE ♥ KPOP</h1>
    <p>
      WE ♥ KPOP is a Korean music dedicated community founded in 2014 on plug.dj.
      It was reborn in 2016 on its own collaborative listening software{' '}
      <a href="https://github.com/u-wave" target="_blank" rel="noopener noreferrer">üWave</a>.
    </p>
    <p>
      WE ♥ KPOP can also be found on:
    </p>
    <ul>
      <SocialMediaLink label="Facebook" href="https://facebook.com/welovekpop.club">
        <FacebookIcon />
      </SocialMediaLink>
      <SocialMediaLink label="YouTube" href="https://youtube.com/c/welovekpopclub">
        <YouTubeIcon />
      </SocialMediaLink>
      <SocialMediaLink label="Instagram" href="https://instagram.com/welovekpop.club">
        <InstagramIcon />
      </SocialMediaLink>
      <SocialMediaLink label="Twitter" href="https://twitter.com/wlk_official">
        <TwitterIcon />
      </SocialMediaLink>
      <SocialMediaLink label="Github" href="https://github.com/welovekpop">
        <GithubIcon />
      </SocialMediaLink>
      <SocialMediaLink label="Slack" href="https://slack.welovekpop.club">
        <SlackIcon />
      </SocialMediaLink>
    </ul>
    <hr className="wlk-AboutPage-separator" />
    <h2>Rules</h2>
    <div className="wlk-Rules">
      <div className="wlk-Rules-left">
        <ol start="1" className="wlk-Rules-list">
          <li className="wlk-Rules-item">Play only Korean related songs.</li>
          <li className="wlk-Rules-item">Songs that are over 7:00 minutes long might be skipped.</li>
          <li className="wlk-Rules-item">Songs that are heavily downvoted might be skipped.</li>
          <li className="wlk-Rules-item">Songs that are in the history (previous 25 songs) will be skipped.</li>
          <li className="wlk-Rules-item">Try to play the best quality versions of songs.</li>
        </ol>
      </div>
      <div className="wlk-Rules-right">
        <ol start="6" className="wlk-Rules-list">
          <li className="wlk-Rules-item">Chat in English!</li>
          <li className="wlk-Rules-item">Don&#39;t spam the chat.</li>
        </ol>
      </div>
    </div>
  </div>
);
