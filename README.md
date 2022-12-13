# stencil-demo

```
npm i
npx lerna bootstrap
npx lerna run build
npx http-server packages/react-app/build
```

Observe the rendering of child component and parent component
Ideally the parent component render should wait for the child to finish render, but here the parent renders before child finish its render
