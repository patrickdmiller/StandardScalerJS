class StandardScaler {
  constructor({ mean_ = [], var_ = [] } = {}) {
    this.mean_ = mean_;
    this.var_ = var_;
    if (this.mean_.length !== this.var_.length) {
      throw new Error("mean shape must equal variance shape");
    }
  }

  //we expect shape like - [[data],[data1]] where data..dataN all have same length
  //for example, [[1,2,3],[4,5,6]] is valid
  //O(3n*m)
  fit(data) {
    this.mean_ = [];
    this.var_ = [];
    let ss = [];
    for (let i = 0; i < data[0].length; i++) {
      this.mean_[i] = 0;
      this.var_[i] = 0;
      ss[i] = 0;
    }
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        this.mean_[j] += data[i][j];
        if (i == data.length - 1) {
          this.mean_[j] /= data.length;
        }
      }
    }

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        ss[j] += (this.mean_[j] - data[i][j]) ** 2;
        if (i == data.length - 1) {
          this.var_[j] = ss[j] / (data.length - 1);
        }
      }
    }
  }

  print() {
    console.log("mean:", this.mean_);
    console.log("variance:", this.var_);
  }

  transform(data) {
    let data_ = [];
    for (let i = 0; i < data.length; i++) {
      let row = [];
      for (let j = 0; j < data[i].length; j++) {
        row.push((data[i][j] - this.mean_[j]) / Math.sqrt(this.var_[j]));
      }
      data_.push(row);
    }
    return data_;
  }

  inverse_transform(data) {
    let data_ = [];
    for (let i = 0; i < data.length; i++) {
      let row = [];
      for (let j = 0; j < data[i].length; j++) {
        row.push(data[i][j] * Math.sqrt(this.var_[j]) + this.mean_[j]);
      }
      data_.push(row);
    }
    return data_;
  }

  fit_transform(data) {
    this.fit(data);
    return this.transform(data);
  }
}

function test() {
  const s = new StandardScaler();
  const d = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8],
    [100, 200, 300],
  ];
  console.log(s.inverse_transform(s.fit_transform(d)));
}

module.exports = StandardScaler;
