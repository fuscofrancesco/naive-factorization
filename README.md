# Prime Factorization - Naive Solver

This repo provides a naive solver for the [Prime Factorization Problem](https://en.wikipedia.org/wiki/Integer_factorization).

The naive solution is based on a while loop in which, starting from 2, we search for the next divisor until we find it and append it to the list of divisors.

## Usage

### Option 1: online

Using runkit. Simply click [here](https://npm.runkit.com/naive-factorization) and copy/paste this code:
```javascript
const NaiveFactorizer = require("naive-factorization")

const factorizer = new NaiveFactorizer();

factorizer.factorize(n);
factorizer.print();

```

### Option 2: use npm

You will need [node JS](https://nodejs.org/en/) installed.

1. Install the library:
```sh
npm install naive-factorization
```
2. Run the below command:
```sh
node node_modules/naive-factorization/index.js
>.fatorize 26435463
prime? false
factors: 1,3,307,28703
elapsed seconds: 0.005
```

### Option 3: clone this repo

You will need [node JS](https://nodejs.org/en/) installed.

You can clone this repo and start by running:
```sh
node index.js
>.fatorize 26435463
prime? false
factors: 1,3,307,28703
elapsed seconds: 0.005
```