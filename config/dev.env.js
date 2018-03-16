'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_DELIVERY : '"http://krol.seldat.vn/api/v1/delivery-order/index"',
})
