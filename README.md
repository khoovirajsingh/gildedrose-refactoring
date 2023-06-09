# Gilded Rose

This is the Gilded Rose kata in TypeScript. The repo is setup with mutation testing and approval testing frameworks.

## Getting started

Install dependencies

```sh
npm install
```

Follow the instructions on https://stryker-mutator.io/docs/stryker-js/getting-started/ to install mutation testing framework

## Running app
_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

## Running mutation tests

```sh
stryker run
```

