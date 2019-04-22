const { deepStrictEqual } = require('assert');
const { create } = require('../trie');
const sampleDictionary = require('./sample-dictionary');
const sampleTrie = require('./sample-trie');

const trie = create(sampleDictionary);

console.log( JSON.stringify(trie, null, 2) );

deepStrictEqual( sampleTrie, trie );
