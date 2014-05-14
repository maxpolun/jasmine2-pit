'use strict'

;(function exportPit(global){
  var jasmine = global.jasmine

  global.pit = function pit(specName, promiseBuilder) {
    var jasmineEnv = jasmine.getEnv()
    var spec = jasmineEnv.it(specName, function runIt(done) {
      var promise = promiseBuilder()
      if(!promise || typeof promise.then !== 'function') {
        spec.addExpectationResult(false, {matcherName: 'jasmine.pit.requirePromise',
                                          passed: false,
                                          message: 'Did not recieve a promise from jasmine.pit',
                                          actual: promise,
                                          expected: true})
        done()
      } else {
        return promise.then(done, function runPromise(err){
          spec.addExpectationResult(false, {matcherName: 'jasmine.pit', 
                                            passed: false,
                                            message: err,
                                            actual: null,
                                            expected: true})
          done()
        })
      }
    })
    return spec
  }

  global.xpit = function xpit(specName, promiseBuilder) {
    return jasmine.getEnv().xit(specName, promiseBuilder)
  }

})(typeof module !== 'undefined' && module.exports ? // are we in node?
    global : 
    window)
