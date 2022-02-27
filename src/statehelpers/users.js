const dummyUsers = [
  { id: 1, name: "Harm de Kluiver", hexColor: "#f1c232" },
  { id: 2, name: "Mauro Nieuwenhuisen", hexColor: "#e83b2e" },
  { id: 3, name: "Rein Op 't Land", hexColor: "#3ca11d" },
];

function findUserByName(userName) {
  return dummyUsers.find((u) => u.name === userName);
}

function generateHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createUser(userName) {
  return {
    id: dummyUsers.length + 1,
    name: userName,
    hexColor: generateHexColor(),
  };
}

export function findOrCreateUser(userName) {
  const existingUser = findUserByName(userName);
  if (existingUser) return existingUser;

  const newUser = createUser(userName);
  dummyUsers.push(newUser);
  return newUser;
}
