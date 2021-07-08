# about DevSpeed filter.js 

filter.js is an javaScript library that makes it easy to filter User inputs. **filterjs** also  have a built in BanWords system that check args for swear words/curse words,

# installation

```cmd
  npm install devspeed-filterjs
```

```javaScript
import Filter from 'devspeed-filterjs';
const filter = Filter() 

filter.hasBanWord('banWord') /// return a Boolean,

filter.isBanWord("banWord") /// return a Boolean,
```

> `filter.hasBanWord('ban word', false)` checks a sentence for the curse word, and return true or false.

```javaScript
  let offensive = 'Good bye b*tch'
  
  let Greeting = 'hi my name is John'

  filter.hasBanWord(offensive, false) /// return true

  filter.hasBanWord(Greeting, false) /// return false

```

> `filter.isBanWord()` does the same as `filter.hasBanWord()` but only take one argument, and return true or false


```javaScript
 filter.isBanWord('b*tch', false)  /// return true

 filter.isBanWord('hello', false)  /// return false

```
> `isBanWord(Ban word , Test )` the test parameter takes a boolean, if set to true a value will be log to the console for test purposes you can leave empty by defualt


# Error Detected
> if You Get this Error in Your browser 

## Cannot use import statement outside a module

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

> Give Your html Script tag a `type` of `module`


```html
 <script type='module' src='./fileName.js'></script>
```

## cannot Get


> if You Get this Error in Your browser 


> `GET http://457.56.8.1:5501/devspeed-filterjs net::ERR_ABORTED 404 (Not Found)` You get Error because the server cannot find the path for some reason the fix is down below

```javaScript
import Filter from './node_modules/devspeed-filterjs/filter.js'
```


# For more protection Keep Up to date


