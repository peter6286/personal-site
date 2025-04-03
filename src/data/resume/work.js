/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'GEICO',
    position: 'Full-Stack Developer',
    url: 'https://www.geico.com',
    startDate: '2025-01-01',
    summary: 'GEICO is one of the largest auto insurers in the U.S. I worked on the Core Insurance Platform, focusing on driver-related services.',
    highlights: [
      'Developed and maintained driver management functionalities, ensuring 99.999% uptime.',
      'Built backend RESTful APIs using Spring Boot and C#/.NET, leveraging Redis caching to reduce MySQL query load and improve efficiency.',
      'Implemented multi-threaded asynchronous processing and Kafka integration for driver premium calculation, boosting performance by 70%.',
      'Designed and developed dual authentication views for consultants and customers with distinct access permissions, using TypeScript and CSS.',
      'Wrote behavior-driven tests using Cucumber and deployed in staging environments to ensure production-readiness and reduce bug-related costs.',
    ],
  },
  {
    name: 'PCI Tech',
    position: 'Data Engineer Intern',
    url: 'https://www.pci-tech.com',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    summary: 'PCI Tech supports Guangzhou’s smart transportation infrastructure through big data solutions.',
    highlights: [
      'Designed and managed a data warehouse for Guangzhou Metro Line 3, handling 15GB of daily traffic data.',
      'Automated SQL generation using Python to accelerate report production and data extraction workflows.',
      'Migrated data from Oracle to Hive and built ODS and DWD layers using Spark SQL.',
      'Utilized Kafka and Flink for real-time streaming and Ambari for system monitoring and management.',
    ],
  },
  {
    name: 'Jetsweat',
    position: 'Full-Stack Developer Intern',
    url: 'https://www.jetsweatfitness.com',
    startDate: '2024-03-01',
    endDate: '2024-06-01',
    summary: 'Jetsweat is a fitness streaming platform connecting users to boutique studios online.',
    highlights: [
      'Implemented 32 new features across frontend and backend using React, SASS, and Redux-Saga.',
      'Developed RESTful APIs with Sails.js and optimized media delivery using AWS S3 and CloudFront.',
      'Containerized deployment processes using Docker and launched on AWS EC2, improving reliability and scalability.',
      'Integrated Swagger for internal API documentation and automated testing pipelines.',
    ],
  },
  {
    name: 'SLAC National Accelerator Laboratory',
    position: 'Full-Stack Developer Intern',
    url: 'https://www6.slac.stanford.edu/',
    startDate: '2022-07-01',
    endDate: '2022-09-01',
    summary: 'SLAC is a U.S. Department of Energy national lab for scientific research in particle physics.',
    highlights: [
      'Migrated 13,000+ entries from Oracle to SQLite and built control room interfaces using PyQt.',
      'Cleaned 13GB of legacy data using Python and DBConvert tools.',
      'Reduced database access latency and saved $1,500/week by optimizing queries with SQLAlchemy.',
      'Collaborated with physicists and engineers to prototype 8 user-focused control panels using Figma and Python.',
    ],
  },
];

export default work;
