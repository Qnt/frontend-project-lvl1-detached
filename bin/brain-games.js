#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
console.log(`Hello, ${name}`);
