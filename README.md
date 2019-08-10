# error-exit
Logs error, then exits. Useful for Node-style callbacks.

```
npm add error-exit
```

```js
import errorExit from 'error-exit'

const doSomething = (error, result) => {
  // exits if there's an error, otherwise pass-thru
  errorExit(error)
};

doSomething(callback)
```

You can optionally specify the exit status code (defaults to `1`):

```js
errorExit(error, 3)
```
