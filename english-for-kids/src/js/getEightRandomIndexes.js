export default function getRandomIndexes(count) {
  const randomIndexes = [];

  while (randomIndexes.length !== count) {
    const value = Math.round((Math.random() * (count - 1)));
    if (!randomIndexes.includes(value)) {
      randomIndexes.push(value);
    }
  }
  return randomIndexes;
}
