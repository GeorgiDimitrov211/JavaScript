function usernames(input) {

  let users = input.map(e => e.split('@'));
  let result = [];

  for (let i = 0; i < users.length; i++){
    let [name, domain] = users[i];
    domain = domain.split('.').map(e => e[0]).join('');
    result.push(name + '.' + domain);
  }
  console.log(result.join(', '))

}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);





