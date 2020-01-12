const NaiveFactorizer = require ('./NaiveFactorizer').NaiveFactorizer;
const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });

replServer.defineCommand('factorize', {
  help: 'try typing: .factorize <n>, where <n> is any integer number. Careful with high values! ;)',
  action(n) {
    this.clearBufferedCommand();
    const factorizer = new NaiveFactorizer();
    factorizer.factorize(parseInt(n));
    factorizer.print();
    this.displayPrompt();
  }
});

replServer.on('exit', () => {
  console.log('exiting program...');
  process.exit();
});
