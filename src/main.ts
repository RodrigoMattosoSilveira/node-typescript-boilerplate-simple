/**
 * A very simple boilerplate to write Node.js scripts using Typescript
 */
import printf from "printf";
import yargs from "yargs";

import * as util from "./utils/util";

const input = yargs.argv;
const argument1 = Number(input.argument1);

const theAnswer: number = util.getTheAnswer(argument1);
console.log(printf("%s,%d", "The answer is ", theAnswer));
