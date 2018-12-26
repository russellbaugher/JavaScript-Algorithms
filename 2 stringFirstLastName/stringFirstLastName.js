//concat
function introduction(firstName, lastName){
  const introduction = "Hi, my name is ".concat(firstName, " ", lastName, ".");
  return introduction;
};

//+ operator
function introduction2(firstName, lastName){
  const introduction2 = "Hi, my name is " + firstName + " " + lastName + ".";
  return introduction2;
};

//template literals
function introduction3(firstName, lastName){
  const introduction3 = `Hi, my name is ${firstName} ${lastName}.`;
  return introduction3;
};

console.log(introduction('Rusty', 'Shackleford'));
console.log(introduction2('Rusty', 'Shackleford'));
console.log(introduction3('Rusty', 'Shackleford'));
