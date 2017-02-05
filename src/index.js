const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(_module => {
    console.log(_module);
    _module.default();
  });
};

document.body.appendChild(button);