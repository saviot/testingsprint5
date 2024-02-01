// Get the modal
var modalLol = document.getElementById('modal');

// Get the form inside the modal
var formLol= modal.querySelector('.modal__content');

// Get the button that opens the modal
var btnOpenModal = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
var spanLol = document.querySelector('.modal__close');

// When the user clicks the button, open the modal
btnOpenModal.addEventListener('click', function () {
  modal.style.display = 'flex';
});

// When the user clicks on <span> (x), close the modal
spanLol.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Add event listener to the form submit
formLol.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the input values
  var namaInput = formLol.querySelector('input[name="nama"]').value;
  var titleInput = formLol.querySelector('input[name="title"]').value;

  // set the values to the profile
  document.querySelector('.profile__name').textContent = namaInput;
  document.querySelector('.profile__title').textContent = titleInput;

  // clear the form values
  formLol.querySelector('input[name="nama"]').value = '';
  formLol.querySelector('input[name="title"]').value = '';

  // Close the modal after form submission
  modal.style.display = 'none';
});

// svg

// #1
function toggleSVG(svg_pan, svg_pun) {
  const svg_pan = document.getElementById(svg_pan);
  const svg_pun = document.getElementById(svg_pun);

  if (svg_pan.classList.contains('active')) {
    svg_pan.classList.remove('active');
    svg_pun.classList.add('active');
  } else {
    svg_pun.classList.remove('active');
    svg_pan.classList.add('active');
  }
}
