const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const scoreIsGreater50 = students.filter(
  (scoreFilter) => scoreFilter.score > 50
);

const updatedScores = scoreIsGreater50.map(
  (upScore) => (upScore.score += upScore.score * 0.1)
);

const totelScoreIs = updatedScores.reduce((acc, num) => acc + num, 0);

console.log(`Total score is ${totelScoreIs}`);
