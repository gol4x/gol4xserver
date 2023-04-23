const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  if (username === 'admin' && password === 'admin') {
    window.location.href = 'success.html';
  } else {
    alert('用戶名或密碼不正確');
  }
});
