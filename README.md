# jasmine2-pit

Run tests on promises using jasmine2 or minijasminenode

## getting it

```npm install --save-dev jasmine2-pit```

## using it

```js

describe('somethign async', function(){
  it('should do something async via a promise', function(){
    return User.find({name: 'testuser'})
  })
})

```

--

inspired by https://github.com/jeffmo/jasmine-pit