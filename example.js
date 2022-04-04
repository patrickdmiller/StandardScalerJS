const StandardScaler = require('./StandardScaler')
const s = new StandardScaler();
const d = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
  [100, 200, 300],
];
const transformed = s.fit_transform(d)
console.log("transformed", transformed)
console.log("original", s.inverse_transform(transformed));
