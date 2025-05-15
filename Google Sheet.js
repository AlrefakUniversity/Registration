const scriptURL = 'https://script.google.com/macros/s/AKfycbxB7BIERuYK97y9KWEbyjwJ9U56J5_rI6sInYVRq1TTZKsKhRnB6gRpMksUukwS_zAv/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("تم تسجيلك مبدئيًا في الجامعة." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
