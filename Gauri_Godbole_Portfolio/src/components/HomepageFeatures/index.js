import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What Am I looking for?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I would like to work in a professional environment at a position that utilizes and enhances my language skills, 
        provides work satisfaction while contributing to organizational growth. 
      </>
    ),
  },
  {
    title: 'What can I do?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      I can convey complex information using easy to understand language using verious technical writing methods, such as DITA and docs-as-code.
      </>
    ),  
  },
  {
    title: 'Who am I?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>I am a senior technical writer with a passion for creating clear and concise documentation. With my background in engineering and language, I strive to deliver high-quality content that enhances user experience.</>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
