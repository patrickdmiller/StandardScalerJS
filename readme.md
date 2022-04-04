## description
js version of a subset of [sklearn's StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html) functions

- functions
  - fit(data): compute mean and variance. todo: add sample weights
  - transform(data): perform standardization by centering and scaling
  - fit_transform(data): fit the data then transform it. same as running fit(), transform()
  - reverse_transform(data') : scale back data to original


## usage
```javascript
const StandardScaler = require('standardscaler')
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
```
output
```
mean: [ 27.5, 53.25, 79 ] var: [ 2340.3333333333335, 9575.583333333334, 21711.333333333332 ]
transformed
 [
  [ -0.5477810634130973, -0.5237345801874558, -0.5157869439843675 ],
  [ -0.5064390963630523, -0.5032961575459941, -0.5022136033531999 ],
  [ -0.4444261457879846, -0.4726385235838016, -0.4818535924064486 ],
  [ 1.4986463055641341, 1.4996692613172515, 1.499854139744016 ]
]
original
 [
  [ 1.0000000000000036, 2.000000000000007, 3 ],
  [ 3, 4, 5.000000000000014 ],
  [ 6, 7, 8 ],
  [ 100, 200, 300 ]
]
```