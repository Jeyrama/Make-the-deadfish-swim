/*
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:
  i increments the value (initially 0)
  d decrements the value
  s squares the value
  o outputs the value into the return array

Invalid characters should be ignored.
parse("iiisdoso") => [ 8, 64 ]
*/


// Solution

const parse = data => {
  const Commands = {
    INCREMENT: 'i',
    DECREMENT: 'd',
    SQUARE:    's',
    OUTPUT:    'o'
  }

  let outputs = [],
      value = 0;

  data.split('').forEach(command => {
    switch(command) {
      case Commands.INCREMENT: value++;                    break;
      case Commands.DECREMENT: value--;                    break;
      case Commands.SQUARE:    value = Math.pow(value, 2); break;
      case Commands.OUTPUT:    outputs.push(value);        break;
    }
  });

  return outputs;
}

// or

function parse(data) {
  let res = [];

  data.split('').reduce((cur, s) => {
    if (s === 'i') cur++;
    if (s === 'd') cur--;
    if (s === 's') cur = Math.pow(cur, 2);
    if (s === 'o') res.push(cur);

    return cur;
  }, 0);

  return res;
}