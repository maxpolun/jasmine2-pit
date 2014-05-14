'use strict'
require('./jasmine2-pit')
var Promise = require('bluebird')

describe('pit', function(){
  pit('it should work for successfull promises', function(){
    return Promise.resolve('worked')
  })
  pit('it should fail for a failing promise', function(){
    return Promise.reject('failed')
  })
  pit('it should fail for a spec with no promise', function(){
    expect(true).toBeTruthy()
  })
  xpit('xpit should be pending', function(){})
  describe('expectations in succeeding promises', function(){
    pit('it should pass with passing expectations', function(){
      return Promise.resolve('promise').then(function(result){
        expect(result).toEqual('promise')
      })
    })
    pit('it should fail with a failing expectation', function(){
      return Promise.resolve('promise').then(function(result){
        expect(result).toEqual('something else')
      })
    })
  })
})