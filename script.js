const usernameGenerator = require('username-generator');

document.getElementById('generate-username').addEventListener('click', () => {
  const randomUsername = usernameGenerator.generateUsername();
  document.getElementById('username-output').innerText = `Generated Username: ${randomUsername}`;
});
