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


# verison 1.0.7

version 1.0.6 bug fixs you can now use this package in serverside applications with out getting err `cannot import outside the module`, 
