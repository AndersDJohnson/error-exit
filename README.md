# error-exit
Logs error, then exits. Useful for Node-style callbacks.

```
npm add error-exit
```

```js
import errorExit from 'error-exit'

const doSomething = (error, result) => {
  if (error) return errorExit(error)
  
  // else proceed...
};

doSomething(callback)
```

You can optionally specify the exit status code (defaults to `1`):

```js
errorExit(error, 3)
```
