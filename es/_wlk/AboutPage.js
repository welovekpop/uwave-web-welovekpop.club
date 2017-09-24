import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';

import FacebookIcon from './icons/Facebook';
import YouTubeIcon from './icons/YouTube';
import InstagramIcon from './icons/Instagram';
import GithubIcon from './icons/Github';
import TwitterIcon from './icons/Twitter';
import SlackIcon from './icons/Slack';

import SocialMediaLink from './SocialMediaLink';

import './AboutPage.css';

var _ref = _jsx('div', {
  className: 'wlk-AboutPage'
}, void 0, _jsx('h1', {
  className: 'wlk-AboutPage-title'
}, void 0, 'WE \u2665 KPOP'), _jsx('p', {}, void 0, 'WE \u2665 KPOP is a Korean music dedicated community founded in 2014 on plug.dj. It was reborn in 2016 on its own collaborative listening software', ' ', _jsx('a', {
  href: 'https://github.com/u-wave',
  target: '_blank',
  rel: 'noopener noreferrer'
}, void 0, '\xFCWave'), '.'), _jsx('p', {}, void 0, 'WE \u2665 KPOP can also be found on:'), _jsx('ul', {}, void 0, _jsx(SocialMediaLink, {
  label: 'Facebook',
  href: 'https://facebook.com/welovekpop.club'
}, void 0, _jsx(FacebookIcon, {})), _jsx(SocialMediaLink, {
  label: 'YouTube',
  href: 'https://youtube.com/c/welovekpopclub'
}, void 0, _jsx(YouTubeIcon, {})), _jsx(SocialMediaLink, {
  label: 'Instagram',
  href: 'https://instagram.com/welovekpop.club'
}, void 0, _jsx(InstagramIcon, {})), _jsx(SocialMediaLink, {
  label: 'Twitter',
  href: 'https://twitter.com/wlk_official'
}, void 0, _jsx(TwitterIcon, {})), _jsx(SocialMediaLink, {
  label: 'Github',
  href: 'https://github.com/welovekpop'
}, void 0, _jsx(GithubIcon, {})), _jsx(SocialMediaLink, {
  label: 'Slack',
  href: 'https://slack.welovekpop.club'
}, void 0, _jsx(SlackIcon, {}))), _jsx('hr', {
  className: 'wlk-AboutPage-separator'
}), _jsx('h2', {}, void 0, 'Rules'), _jsx('div', {
  className: 'wlk-Rules'
}, void 0, _jsx('div', {
  className: 'wlk-Rules-left'
}, void 0, _jsx('ol', {
  start: '1',
  className: 'wlk-Rules-list'
}, void 0, _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Play only Korean related songs.'), _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Songs that are over 7:00 minutes long might be skipped.'), _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Songs that are heavily downvoted might be skipped.'), _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Songs that are in the history (previous 25 songs) will be skipped.'), _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Try to play the best quality versions of songs.'))), _jsx('div', {
  className: 'wlk-Rules-right'
}, void 0, _jsx('ol', {
  start: '6',
  className: 'wlk-Rules-list'
}, void 0, _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Chat in English!'), _jsx('li', {
  className: 'wlk-Rules-item'
}, void 0, 'Don\'t spam the chat.')))));

export default (function () {
  return _ref;
});
//# sourceMappingURL=AboutPage.js.map
