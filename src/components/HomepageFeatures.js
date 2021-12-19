import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible',
    Svg: require('/img/easyToUse.svg').default,
    description: (
      <>
        You can use <b>OpenSesame, jsPsych, lab.js</b> - or write your own experiment in JavaScipt/HTML/CSS.
      </>
    ),
  },
  {
    title: 'Be in charge of your data',
    Svg: require('/img/focusOnWhatMatters.svg').default,
    description: (
      <>
        You can install JATOS on your <b>own server</b> (at your university) - or in the cloud.
      </>
    ),
  },
  {
    title: 'JATOS on MindProbe',
    Svg: require('/img/poweredBy.svg').default,
    description: (
      <>
        Sponsored by the <b>European Society for Cognitive Psychology (ESCoP)</b> with <b>Journal of Cognition</b> as their official journal and <b>OpenSesame</b>. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
