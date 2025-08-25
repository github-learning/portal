const getMfConfig = require('@core/craco-config/src/getMfConfig');

const { name, dependencies } = require('./package.json');
module.exports = getMfConfig({
    name,
    dependencies
})


