function customBind(foo, context) {
  return function () {
    const args = Array.from(arguments);
    context.f = foo;
    const res = context.f(...args);
    delete context.f;
    return res;
  };
}

const obj = {
  name: 'Matt',
};

function greet() {
  console.log(`Hello ${this.name}!`);
}

const bindGreet = customBind(greet, obj);
bindGreet();
