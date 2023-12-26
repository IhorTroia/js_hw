"use strict";

(function () {
  const user = {
    name: 'Ihor',
  };

  Object.defineProperty(user, 'name', {
    writable: false,
  });

  Object.defineProperty(user, 'age', {
    value: 21,
    writable: true,
    configurable: true,
  });

  console.log(Object.getOwnPropertyDescriptors(user));
  for (const key in user) {
    console.log(key, user[key]);
  }
  console.log(Object.keys(user));
  // -----------------------------------------------------------
  Object.defineProperties(user, {
    name: {
      writable: true,
    },
    surname: {
      value: 'Troia',
      writable: true,
      enumerable: true,
      configurable: true,
    },
    fullName: {
      get() {
        return `Hello ${this.name} ${this.surname}`;
      },
      set(value) {
        this.name = value.split(' ')[0];
        this.surname = value.split(' ')[1];
      },
    },
  });
  console.log(user.fullName);
  //   -------------------------------------------------------------
  const keys = {
    key1: '12345',
    key2: 'qwerty',
  };

  console.log(Object.getOwnPropertyDescriptors(keys));
  Object.freeze(keys);
  console.log(Object.getOwnPropertyDescriptors(keys));

  Object.defineProperty(keys, 'key1', {
    writable: true,
    value: 'newPass',
  });
//  error
//   TypeError: Cannot redefine property: key1
//     at Function.defineProperty (<anonymous>)
}());
