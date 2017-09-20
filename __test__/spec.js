const pubsub = require('../index')

let num = 0;

const INCREMENT = '/INCREMENT';
const DECREMENT = '/DECREMENT';

let incrementToken = pubsub.subscribe(INCREMENT, function(type, val) {
  num += val;
  console.log(`INCREASED by ${val}, now: num: ${num}`)
});

let decrementToken = pubsub.subscribe(DECREMENT, function(type, val) {
  num -= val;
  console.log(`DECREASED by ${val}, now, num: ${num}`);
});

console.log('===>', pubsub)

pubsub.publish(INCREMENT, 3);
pubsub.publish(INCREMENT, 5);
pubsub.publish(DECREMENT, 1);
pubsub.publish(DECREMENT, 0);

pubsub.removeSubscriber(incrementToken);
console.log(`Before increment: num is ${num}`);
pubsub.publish(INCREMENT, 3);
console.log(`After increment: num is still ${num}`);
