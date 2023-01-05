// A simple JS function to shuffle the % of match a movie/series is to its user
export function shuffleMatch(): string {
  const min = 70;
  const max = 94;
  const randomValue = Math.floor(Math.random() * (max - min) + min);

  return `${randomValue}% Match`
}
