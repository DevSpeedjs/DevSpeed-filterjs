# about DevSpeed filter.js 

filter.js is an javaScript library that makes it easy to filter User inputs. **filterjs** also  have a built in BanWords system that check args for swear words/curse words, package type `node module`

# installation

```cmd
 npm install devspeed-filterjs
```

## quick start 

```js
 const filter = require('devspeed-filterjs')
  
  filter.isBanWord('banword') // return boolean value
  filter.hasBanWord('how are banword you') // checks an sentence return boolean
  filter.getBanWord((results)=>{
      console.log(results) // note this will return all defuilt cuss words in json fromat
  }) 
```
# examples
```js
 filter.hasBanWord('f*uk') // return true
```

#### `censor()` method

``` js
// added in version 1.0.7

filter.censor('banword') // return the cussword censored

// example

filter.censor('some bad words') // return ****
```
#### also works in sentences

```js
filter.censor('hello f*ck you')  // return hello **** you
```


