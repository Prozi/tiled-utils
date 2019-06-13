const PIXI = require('pixi-shim')
const TiledUtils = require('..')

const test = new TiledUtils(PIXI)
/* eslint-disable no-console */
console.log(test)

/* global process */
process.exit(0)
