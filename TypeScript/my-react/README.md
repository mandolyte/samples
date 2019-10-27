# A TypeScript React Project

From: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

First the project layout
```sh
mkdir src
cd src
mkdir components
cd ..
```

Next initialize it:
```sh
npm init -y
```

Install dependencies:
```
npm install --save-dev webpack webpack-cli
```

Now the React specific things:
```
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

And some more:
```
npm install --save-dev typescript ts-loader source-map-loader
```

Add a tsconfig to project root named `tsconfig.json`:
```
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "target": "es6",
        "jsx": "react"
    }
}
```

Next create the component (`src/component/Hello.tsx`) and main index (`src/index.tsx`).

Next `index.html`.

Next create `webpack.config.js`.

Next build it: `npx webpack`.

Now view it by opening `index.html` in browser