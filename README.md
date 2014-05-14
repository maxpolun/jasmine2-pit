# jasmine2-pit

Run tests on promises using jasmine2 or minijasminenode

## getting it

```npm install --save-dev jasmine2-pit```

## using it

```js
describe('something async', function(){
  pit('should do something async via a promise', function(){
    return User.find({name: 'testuser'}).then(function(user){
      expect(user.name).toEqual('testuser')
    })
  })
})
```

In this example the test will fail if the expectation fails, or if the promise fails (in this example, User.find). This will also always complete, which can be a bit tricky if you're handling this by hand. If you don't return a promise, then it will fail as well -- if you don't want to return a promise use ```it``` not ```pit```. ```xpit``` exis as well to skip tests

## Developing

Run ```grunt``` to get linting and run the tests. Note that some of the tests are expected to fail -- there may be a better way to test failure, but this is simple and in a small project is acceptable. Make a PR if you have any features you'd like added.

--

inspired by https://github.com/jeffmo/jasmine-pit