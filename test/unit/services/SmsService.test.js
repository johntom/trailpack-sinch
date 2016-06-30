'use strict'
/* global describe, it */
const assert = require('assert')

describe('SinchService', () => {
  it('should exist', () => {
    assert(global.app.api.services['SinchService'])
    assert(global.app.services['SinchService'])
    assert(global.app.services['SinchService'].sendMessage)
  })
})
