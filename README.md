#New Relic + Restify Bug Test Case

Test case for [newrelic/node-newrelic#100](https://github.com/newrelic/node-newrelic/issues/100)

You must include a valid newrelic.js configuration file before running any of the scripts besides restifyonly.

##Scripts

###index.js
The main test case, demonstrating the bug occurring

###newreliconly.js
Demonstrates that the test case works when only newrelic is required

###restifyonly.js
Demonstrates that the test case works when only restify is required

###restifyfirst.js
Demonstrates that the bug does not occur if restify is included before newrelic
