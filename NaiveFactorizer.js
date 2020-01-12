class NaiveFactorizer {
  constructor() {
    this.divisor = 2;
    this.number = 0;
    this.factors = [1];
    this.elapsed = 0;
    this.isPrime = false;
  }

  /*
   * Executes the factorization of the input number. After it has done with the calcuation
   * it also establishes whether the number is prime or not.
   *
   * @param { number } n - the number to factorize
   *
   */
  factorize(number) {
    this.number = number;
    if (this.number === 1) this.isPrime = true;
    const tick = (new Date()).getTime();
    while (this.number > 1) {
      if (this.number % this.divisor === 0) {
        this.factors.push(this.divisor);
        this.number /= this.divisor;
        // console.log(`divisor: ${this.divisor}`);
        this.divisor = 2;
      } else this.divisor++;
    }
    const tock = (new Date()).getTime();
    this.elapsed = (tock - tick) / 1000;
    if (this.factors.length === 2) this.isPrime = true;
  }

  /*
   * Utility function that prints out whether the number is prime, its prima factors
   * and the elapsed time required for the factorization.
   *
   */
  print() {
    console.log(`prime? ${this.isPrime}\nfactors: ${this.factors}\nelapsed seconds: ${this.elapsed}`);
  }
}

exports.NaiveFactorizer = NaiveFactorizer;
