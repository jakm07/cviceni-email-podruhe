const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S přáním hezkého dne ' + name
};

const rudeGoodbye = (name) => {
  return 'Měj se ' + name
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = goodbyeFunction(name);
};

fillSubject('Pozvánka na oslavu')
fillBody('Přijď na oslavu!', 'Patrik Veselý', rudeGoodbye)
