function checkNameAndRedirect(event) {
    if (event.key === 'Enter') {
      var nameInput = document.getElementById('input-name');
      var name = nameInput.value;
      if (name === 'colorama') {
        window.location.href = '#';
      } else {
        window.location.href = 'error.html';
      }
    }
  }