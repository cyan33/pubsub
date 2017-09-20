const pubsub = {};

(function pubsubWrapper(ps) {
  let types = {};
  let subUuid = -1;

  ps.publish = (type, ...para) => {
    if (!types[type]) {
      throw `${type} doesn't exist!`;
    }
    const subscribers = types[type];
    const len = subscribers ? subscribers.length : 0;

    for (let i = 0; i < len; i += 1) {
      subscribers[i].func(type, ...para);
    }
  };

  ps.subscribe = (type, func) => {
    if (!types[type]) {
      types[type] = [];
    }
    subUuid += 1;

    types[type].push({
      uuid: subUuid,
      func,
    })

    return subUuid;
  };

  ps.removeSubscriber = (uuid) => {
    for (let m in types) {
      for (let i = 0; i < types[m].length; i += 1) {
        if (types[m][i].uuid === uuid) {
          types[m].splice(i, 1);  // remove the subscriber from that type
          return uuid;
        }
      }
    }
    return null;
  };
})(pubsub);

module.exports = pubsub;
