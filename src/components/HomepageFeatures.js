import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible',
    description: (
      <>
        You can use <b>OpenSesame</b>, <b>jsPsych</b>, <b>lab.js</b> - or write your own experiment in JavaScipt/HTML/CSS. Get participants from <b>Prolific</b> or <b>MTurk</b> (or from wherever). 
      </>
    ),
  },
  {
    title: 'Be in charge of your data',
    description: (
      <>
        JATOS is <b>free</b> and <b>open source</b>. You can install JATOS on your <b>own server</b> (at your university) - or in the cloud - wherever you want.
      </>
    ),
  },
  {
    title: 'JATOS on MindProbe',
    description: (
      <>
        Use this free JATOS sponsored by the <b>European Society for Cognitive Psychology (ESCoP)</b> with <b>Journal of Cognition</b> as their official journal and <b>OpenSesame</b>. 
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
