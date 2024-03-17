

const path = require('path');
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
outputDir: path.resolve(__dirname, '../headsup-server/public'),
// ...

productionSourceMap: false,
pwa: {
workboxPluginMode: 'InjectManifest',
workboxOptions: {
swSrc: 'public/service-worker.js',
exclude: [],
},
},

};