const pubsub = require('../index')

let num = 0;

const INCREMENT = '/INCREMENT';
const DECREMENT = '/DECREMENT';

let incrementToken = pubsub.subscribe(INCREMENT, function(type, val) {
  num += val;
});

let decrementToken = pubsub.subscribe(DECREMENT, function(type, val) {
  num -= val;
});

describe('pub/sub pattern test', () => {
  it('each subscribers subscribes to the according event', () => {
    pubsub.publish(INCREMENT, 3);
    expect(num).toBe(3);
    pubsub.publish(DECREMENT, 1);
    expect(num).toBe(2);
  })

  it('removes subscribers', () => {
    pubsub.removeSubscriber(incrementToken);
    pubsub.publish(INCREMENT, 10);
    // after remove subscriber, it doesn't listen to the according event, so the num is still 2
    expect(num).toBe(2);
  })
});
