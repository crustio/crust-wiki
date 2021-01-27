/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('gettingStarted.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('claims.html')}>CRU Claims</a>
            <a href={this.docUrl('GPoS.html')}>
              GPoS
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/*<a href={`${this.props.config.baseUrl}users`}>User Showcase</a>*/}
            {/*<a*/}
            {/*  href="https://stackoverflow.com/questions/tagged/"*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer noopener">*/}
            {/*  Stack Overflow*/}
            {/*</a>*/}
            {/*<a href="https://discordapp.com/">Project Chat</a>*/}
            <a
              href="https://twitter.com/CrustNetwork"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
            <a
                href="https://t.me/CrustNetwork"
                target="_blank"
                rel="noreferrer noopener">
              Telegram
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a
                href="https://crust.network/cooperation"
                target="_blank"
                rel="noreferrer noopener">
              Cooperation
            </a>
            {/*<a href={`${this.props.config.baseUrl}blog`}>Blog</a>*/}
            <a href="https://github.com/crustio">GitHub</a>
            {/*<a*/}
            {/*  className="github-button"*/}
            {/*  href={this.props.config.repoUrl}*/}
            {/*  data-icon="octicon-star"*/}
            {/*  data-count-href="/crust"*/}
            {/*  data-show-count="true"*/}
            {/*  data-count-aria-label="# stargazers on GitHub"*/}
            {/*  aria-label="Star this project on GitHub">*/}
            {/*  Star*/}
            {/*</a>*/}
            {/*{this.props.config.twitterUsername && (*/}
            {/*  <div className="social">*/}
            {/*    <a*/}
            {/*      href={`https://twitter.com/${this.props.config.twitterUsername}`}*/}
            {/*      className="twitter-follow-button">*/}
            {/*      Follow @{this.props.config.twitterUsername}*/}
            {/*    </a>*/}
            {/*  </div>*/}
            {/*)}*/}
            {/*{this.props.config.facebookAppId && (*/}
            {/*  <div className="social">*/}
            {/*    <div*/}
            {/*      className="fb-like"*/}
            {/*      data-href={this.props.config.url}*/}
            {/*      data-colorscheme="dark"*/}
            {/*      data-layout="standard"*/}
            {/*      data-share="true"*/}
            {/*      data-width="225"*/}
            {/*      data-show-faces="false"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        </section>

        {/*<a*/}
        {/*  href="https://opensource.facebook.com/"*/}
        {/*  target="_blank"*/}
        {/*  rel="noreferrer noopener"*/}
        {/*  className="fbOpenSource">*/}
        {/*  <img*/}
        {/*    src={`${this.props.config.baseUrl}img/oss_logo.png`}*/}
        {/*    alt="Facebook Open Source"*/}
        {/*    width="170"*/}
        {/*    height="45"*/}
        {/*  />*/}
        {/*</a>*/}
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
