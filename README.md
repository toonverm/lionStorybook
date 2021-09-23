```js script
export default {
  title: 'Home/Introduction',
};
```

Hi This Repo is to demonstrate the problem that I have With Storybook static html and Lion components

If you run ``yarn storybook`` everything will work fine.

If you run ``yarn storybook:build; yarn start`` everything will break.

The error you should get is 
```js
Uncaught TypeError: Illegal constructor
    at new r (0b0bb32b.js:1)
    at HTMLElement.<anonymous> (0b0bb32b.js:1)
    at new n (0b0bb32b.js:1)
    at HTMLElement.<anonymous> (0b0bb32b.js:1)
    at new r (0b0bb32b.js:1)
    at HTMLElement.<anonymous> (0b0bb32b.js:1)
    at new r (0b0bb32b.js:1)
    at HTMLElement.<anonymous> (0b0bb32b.js:1)
    at new r (0b0bb32b.js:1)
    at HTMLElement.<anonymous> (0b0bb32b.js:1)
```
