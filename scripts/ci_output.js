var CI = require('../src/ci');

var ci_vars = CI.getVars();

console.log(`build: ${ci_vars.build}`);
console.log(`branch: ${ci_vars.branch}`);
console.log(`commit: ${ci_vars.commit}`);