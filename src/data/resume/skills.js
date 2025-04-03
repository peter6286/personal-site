const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering', 'Data Engineering'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'JavaScript',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML/CSS/TypeScript',
    competency: 5,
    category: ['Languages', 'Frontend Development'],
  },
  {
    title: 'ReactJS',
    competency: 5,
    category: ['Web Development', 'Frontend Development'],
  },
  {
    title: 'NodeJS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'Sails',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Sass',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Django',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Spring Boot',
    competency: 5,
    category: ['Web Development', 'Java'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'TensorFlow',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Spark',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Hive',
    competency: 4,
    category: ['Data Engineering'],
  },
  {
    title: 'Clickhouse',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Flink',
    competency: 2,
    category: ['Data Engineering'],
  },
  {
    title: 'TDengine',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Google Cloud',
    competency: 3,
    category: ['Cloud'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['DevOps'],
  },
  {
    title: 'Jenkins',
    competency: 2,
    category: ['DevOps'],
  },
  {
    title: 'ZooKeeper',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'CUDA',
    competency: 2,
    category: ['ML Engineering'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Android Studio',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Apache Ant',
    competency: 2,
    category: ['Build Tools'],
  },
  {
    title: 'Gradle',
    competency: 2,
    category: ['Build Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
