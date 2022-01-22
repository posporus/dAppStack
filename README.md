# dAppStack Base
Base project for developing dAapps.

## Stack:
- [x] Svelte
- [x] Truffle
- [x] Web3js
- [x] Tailwind
- [x] DaisyUi
- [x] Typescript

## Installation

1. `git clone https://github.com/posporus/dAppStack.git`

2. `yarn`

## Interacting with Truffle
#### Compile
`yarn compile`
#### Migrate
`yarn migrate`
#### Test
`yarn test`
#### Generate Types
`yarn generate-types`

## Truffle & Typescript
Good practice for using Typescript togeger with truffle is to
have a 'provide.ts' in your root folder in wich you import and export your
artifacts.

``` ts
//provide.ts
export const Contract = artifacts.require("Contract")
```
So you can import them later into your migration and test files.
``` ts
//deploy_contract.ts
import { Contract } from '../provide'

module.exports = function (deployer: Truffle.Deployer, network: string, accounts: string[]) {
    deployer.deploy(Contract)
}

```

