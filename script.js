// script.js
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    if (!name) {
      alert('Vui lòng nhập tên của bạn!');
      event.preventDefault();
    }
  });
  