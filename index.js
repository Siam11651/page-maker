var quill = new Quill('#editor-container', {
    modules: {
      toolbar: [
        [
          {font: []},
          {size: []},
          {align: []},
          {color: []}
        ],
        ['bold', 'italic', 'underline'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['image', 'formula']
      ]
    },
    theme: 'snow'  // or 'bubble'
  });
  
  let container = document.getElementById('container');
  let button = document.getElementById('generate-button');
  button.onclick = function()
  {
    container.value = JSON.stringify(quill.getContents());
  };