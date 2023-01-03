// TODO: Rock Paper Scissors inside the console
// Or maybe tic tac toe?

function init() {
  updateCopyright();
}

function updateCopyright() {
  const copyright = document.querySelector('.copyright');
  const year = new Date().getFullYear();
  copyright.textContent = `Copyright © ${year} Will Paceley`;
}

document.addEventListener('DOMContentLoaded', init);
