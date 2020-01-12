# Prime Factorization - Naive Solver

This repo provides a naive solver for the [Prime Factorization Problem](https://en.wikipedia.org/wiki/Integer_factorization).

The naive solution is based on a while loop in which, starting from 2, we search for the next divisor until we find it and append it to the list of divisors.

## Usage

You will need [node JS](https://nodejs.org/en/) installed.

### Option 1: clone this repo

You can clone this repo and start by running:
```sh
node .
>.fatorize 26435463
prime? false
factors: 1,3,307,28703
elapsed seconds: 0.005
```
### Option 2: use npm

1. Install the library:
```sh
npm install naive-factorization
```
2. Create a file named index.js containing the below line:
```javascript
const nf = require('naive-factorization');
```
3. Simply run:
```sh
node .
```
