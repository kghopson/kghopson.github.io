import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Resume',
    link: '/docs/resume',
    Svg: require('@site/static/img/undraw_resume_re_hkth.svg').default,
    description: (
      <>
        View and download my resume
      </>
    ),
  },
  {
    title: 'About Me',
    link: '/docs/about-me',
    Svg: require('@site/static/img/undraw_mello_otq1.svg').default,
    description: (
      <>
        Learn more about my background and hobbies
      </>
    ),
  },
  {
    title: 'Portfolio',
    link: '/docs/category/portfolio',
    Svg: require('@site/static/img/undraw_add_files_re_v09g.svg').default,
    description: (
      <>
        Check out some curated samples
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          {link ? (
            <a href={link} className={styles.featureLink}>
              {title}
            </a>
          ) : (
            title
          )}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const introStyle = {
    textAlign: 'center',
    fontSize: '1.5rem', // Adjust the font size as needed
    marginBottom: '3rem', // Add space below the intro paragraph
  };

  const bannerStyle = {
    marginBottom: '2.5rem', // Increase the space between the banner and the intro paragraph
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={bannerStyle}>
          <div className="col col--12" style={introStyle}>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}