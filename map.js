const people = [
  {
    name: 'bob',
    age: 22,
    position: 'devoloper',
  },
  {
    name: 'anna',
    age: 23,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 32,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 24,
    position: 'interpretor',
  },
];

const ages1 = people.map(function (person) {
  return person.name;
});
console.log(ages1);

const ages = people.map((person) => person.age);
console.log(ages);
