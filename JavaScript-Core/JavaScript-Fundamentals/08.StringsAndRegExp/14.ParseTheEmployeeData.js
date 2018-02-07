function parseTheEmployeeData(input) {
  let match;
  let regex = /^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([A-Za-z0-9 -]+)$/g;
  for (let i = 0; i < input.length; i++){
    while (match = regex.exec(input[i])){
      console.log(`Name: ${match[1]}\nPosition: ${match[3]}\nSalary: ${match[2]}`)
    }
  }
}
parseTheEmployeeData(['Isacc - 1000 - CEO', 'Ivan - 500 - Employee', 'Peter - 500 - Employee']);
parseTheEmployeeData(['Jonathan - 2000 - Manager', 'Peter- 1000- Chuck', 'George - 1000 - Team Leader'])





