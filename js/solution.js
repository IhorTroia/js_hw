const itemElement = document.querySelectorAll('li');
for (const item of itemElement) {
  console.log(item.textContent);
}

const ul = document.querySelector('ul');
const { attributes } = ul;
const attributeValue = [];
const attributeName = [];
for (const item of attributes) {
  attributeValue.push(item.value);
  attributeName.push(item);
}

console.log(attributeValue);
console.log(attributeName);

const lastItem = document.querySelector('ul li:last-child');
lastItem.innerHTML = 'Hello, my name is Ihor';
const firstItem = document.querySelector('ul li:first-child');
firstItem.setAttribute('data-my-name', 'Ihor');
const list = document.querySelector('ul');
list.removeAttribute('data-dog-tail');
