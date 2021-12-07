import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <header>
            <div className="center">
              <img src="/img/jatos_logo_color.svg" />
            </div>
            <div className="header-text">  
              <h1>{siteConfig.title}</h1>
              <p>{siteConfig.tagline}</p>
            </div>
        </header>
        <div className="center">
          <div>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/JATOS/JATOS/releases/latest">
              Download
            </Link>
            <div className="divider"/>
            <Link
              className="button button--secondary button--lg"
              to="https://cortex.jatos.org/jatos/login">
              Try Out
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}