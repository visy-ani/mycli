#!/usr/bin/env node

import { count } from './utils.js';

const mycli = process.argv[2];

const newmycli = {
    content: mycli,
    id: Date.now()
}

console.log(newmycli)

(function() {
    console.log("IIFE")
})()