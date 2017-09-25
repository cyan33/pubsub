# Pub/Sub
> :crystal_ball: The JavaScript implementation of the publish/subscribe pattern.

## Installation
```
npm install @changyan/pubsub
```

## Usage

```js
import pubsub from '@changyan/pubsub'

let greetingToken = pubsub.subscribe('/GREETING', (type, name) => {
  console.log(`${type}: Hello ${name}!`);
})

pubsub.publish('/GREETING', 'Yara'); // '/GREETING: Hello Yara!'

pubsub.removeSubscriber(greetingToken);
```
