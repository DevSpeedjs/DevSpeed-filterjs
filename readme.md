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


# other methods

```js

const filter, { Filter } = require('devspeed-filterjs')

let filterMessages = new Filter('some bad words')

filterMessages.isBanWord((results)=>{
    console.log(results) // return true or false
})
```

### add ban word to the dictionary
if filterjs does not block/censor the curse word than use this function

```js
  const filter = require('devspeed-filterjs')

    const new_banword = [
    'foo',
    'bar',
    ] 

   try {
    filter.addBanWord(new_banword)
    
   } catch (error) {
      console.log(error)
   }
```
> to add a custom ban word to the `dictionary`

# what is the `try` `catch` block for
To prevent you form adding an banword that is already in `dictionary`, we throw an error that says `banword already in the dictionary taken`, so we recommend useing the try catch block to not crash your program 

**put this function at the top of your js file for it to work well**

# funtions list

| Syntax | Description |
| ------| ----------- |
| getBanWord()    | return all ban word in json format |
| isBanWord()     | checks an single args and return true or false|
| hasBanWord()    | checks an sentence and return true or false |
| Filter()        | an class containing all the methods|
