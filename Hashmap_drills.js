const Hashmap = require('./Hashmap');

MAX_LOAD_RATIO = 0.5;
SIZE_RATIO = 3;

function main() {
  let lotr = new Hashmap();
  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragon');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');
  console.log(lotr);
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));

  const WhatDoesThisDo = function() {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new Hashmap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    let map2 = new Hashmap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
  };
  console.log(WhatDoesThisDo());

  function duplicate(str) {
    let dup = new Hashmap();
    for (let i = 0; i < str.length; i++) {
      dup.set(str[i], str[i]);
    }
    console.log(dup);
    let newStr = '';
    dup._hashTable.forEach(letter => {
      newStr += letter.value;
    });
    console.log(newStr);
  }
  console.log(duplicate('google all that you can think of'));

  function palindrome(str) {
    const pMap = new Map();
    console.log(pMap);
    let odd = 0;
    for (let i = 0; i < str.length; i++) {
      if (pMap.get(str[i]) === undefined) {
        console.log(str[i]);
        pMap.set(str[i], 1);
        console.log(pMap);
      } else {
        let char = pMap.get(str[i]);
        pMap.set(str[i], (char += 1));
      }
    }
    for (let i = 0; i < pMap.size; i++) {
      if (pMap.get(str[i]) % 2 !== 0) {
        odd++;
        console.log('odd', odd);
      }
      if (odd > 1) {
        return false;
      }
    }
    return true;
  }
  console.log(palindrome('acecarr'));
}
main();
