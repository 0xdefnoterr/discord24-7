## Discord 24/7
## Step 1 :
1. Create a .env file in which you'll put your discord token, If you don't know how to get your discord token follow this :
## Step 2 Get Token ?

<strong>Copy code to console Discord [Ctrl + Shift + I]</strong>

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```
## Step 3 :
Place your Token inside the .env file following this code : ``TOKEN=TOKEN_YOU_JUST_COPIED``
## Step 4 :
run ``node index.js`` and you'll be alright, setting up repl.it soon once i get home
