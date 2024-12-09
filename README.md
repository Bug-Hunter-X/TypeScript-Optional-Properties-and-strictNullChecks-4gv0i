# TypeScript Optional Properties and strictNullChecks
This example demonstrates a common issue when using optional properties in TypeScript with the `strictNullChecks` compiler option enabled.  The `printName` function expects an object with a `firstName` property and an optional `lastName` property. If only `firstName` is provided, the optional `lastName` property will be `undefined` and cause an error if `strictNullChecks` is on because of potential null or undefined values. The solution shows how to safely handle optional properties to avoid these errors.

## Setup:

1.  Make sure you have TypeScript installed (`npm install -g typescript`)
2.  Compile the code using `tsc bug.ts` (and `tsc bugSolution.ts`)
3.  Run the compiled JavaScript files.