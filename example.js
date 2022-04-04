const StandardScaler = require('./StandardScaler')
const s = new StandardScaler();
const d = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
  [100, 200, 300],
];
const transformed = s.fit_transform(d)
console.log("mean:", s.mean_, "var:", s.var_)
console.log("transformed\n", transformed)
console.log("original\n", s.inverse_transform(transformed));
