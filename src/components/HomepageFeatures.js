import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('/img/easyToUse.svg').default,
    description: (
      <>
        JATOS was designed from the ground up to be easily installed and
        used to get your experiment set-up online and run quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('/img/focusOnWhatMatters.svg').default,
    description: (
      <>
        JATOS lets you focus on your experiment, and we&apos;ll do the chores. Go
        ahead and move your experiment into the <code>Example Studies</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('/img/poweredBy.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
