var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block']
      ]
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'  // or 'bubble'
  });
  
  let container = document.getElementById('container');
  let button = document.getElementById('generate-button');
  button.onclick = function()
  {
    container.value = JSON.stringify(quill.getContents());
  };