const printMyName1 = () => {
  console.log("Jeerawat");
}

const printMyName2 = (name) => {
  console.log(name);
}

const printMyName3 = name => {
  console.log(name);
}

const printMyName4 = (name, age) => {
  console.log(name, age);
}

const mutiply = (number) => {
  return number * 2;
}

const mutiply2 = (number) => number * 2;

printMyName1()
printMyName2("Jeerawat2")
printMyName3("Jeerawat3")
printMyName4("Jeerawat4", "24")
console.log(mutiply(2))
console.log(mutiply2(3))


// Console
/* "Jeerawat"
"Jeerawat2"
"Jeerawat3"
"Jeerawat4"
"24"
4
6 */
