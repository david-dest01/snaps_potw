const { expect } = require('chai');
/**
 * Problem: https://leetcode.com/problems/add-and-search-word-data-structure-design/
 * 
 * Prompt:
 * Design a data structure that supports the following two operations
 *   void addWord(word)
 *   bool search(word)
 * search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
 * 
 * Examples:
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * You may assume that all words are consist of lowercase letters a-z.
*/

// Initialize your data structure here.
function WordDictionary() {
    
}

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


const wd = new WordDictionary;

wd.addWord('bad');
wd.addWord('dad');
wd.addWord('mad');

try {
  expect(wd.search("pad")).be.false
  console.log('expect "pad" to be false -  ✅');
}
catch (err) {
  console.error('expect "pad" to be false -  ❌');
}
try {
  expect(wd.search("bad")).be.false
  console.log('expect "bad" to be true -  ✅');
}
catch (err) {
  console.error('expect "bad" to be true -  ❌');
}
try {
  expect(wd.search(".ad")).be.false
  console.log('expect ".ad" to be true -  ✅');
}
catch (err) {
  console.error('expect ".ad" to be true -  ❌');
}
try {
  expect(wd.search(".ad")).be.false
  console.log('expect "b.." to be true -  ✅');
}
catch (err) {
  console.error('expect "b.." to be true -  ❌');
}