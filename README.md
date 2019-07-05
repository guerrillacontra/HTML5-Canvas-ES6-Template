# HTML5-Canvas-ES6-Template

Boilerplate and webpack/babel etc setup for a modern HTML5 canvas application using NPM.

# What can this do for me?

This can be used to quickly get running with a very simple/minimal HTMl5 canvas project using ES6.

# What features?

You can run two commands out-of-the box:

```javascript
npm run start:dev
```
To launch your dev server, with babel ES6 transpiling, real time file watching and source-mapping features.

All of the files are in the dist and other than the index.bundle.js file that is generated, you are free to do what you want.

```javascript
npm run start:prod
```

Builds an uglified + production ready bundle in the dist folder.

Both webpack files are extended from a common webpack build so it is easy to add stuff to both.

# List of plugins/tools (all dev dependencies!)

1. Webpack
2. Babel
3. Browser sync
4. Clean webpack
5. Uglify
6. Webpack merge
