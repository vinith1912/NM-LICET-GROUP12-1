function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Perform validation (e.g., check credentials from a database)
    // For simplicity, let's assume the credentials are hardcoded
    if (username === 'user' && password === 'password') {
      window.location.href = 'taskList.html'; // Redirect to task list on successful login
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
  