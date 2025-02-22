// script.js
// document.getElementById('showCardBtn').addEventListener('click', function () {
//   document.getElementById('card').style.display = 'block';
// });

// document.querySelector('.close-btn').addEventListener('click', function () {
//   document.getElementById('card').style.display = 'none';
// });

// // Optional: close card when clicking outside of it
// window.addEventListener('click', function (event) {
//   var card = document.getElementById('card');
//   if (event.target == card) {
//     card.style.display = 'none';
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.group')
  const tooltip = document.getElementById('tooltip')

  button.addEventListener('mouseenter', function () {
    tooltip.classList.remove('hidden', 'opacity-0')
  })

  button.addEventListener('mouseleave', function () {
    tooltip.classList.add('opacity-0')
    setTimeout(() => {
      tooltip.classList.add('hidden')
    }, 300) // Delay agar efek fade out terasa smooth
  })
})

document.addEventListener('DOMContentLoaded', function () {
  fetch('/assets/images/indonesia.svg')
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById('svg-container')
      const svg = this.getElementsByTagName('svg').children
      container.innerHTML = data
      console.log(svg)

      // Mengakses elemen SVG
      // const svgElement = container.querySelector('svg')
      // svgElement.setAttribute('width', '100%')
      // svgElement.setAttribute('height', '100%')

      // // Mengubah warna lingkaran dalam SVG
      // const circle = svgElement.querySelector('circle')
      // if (circle) {
      //   circle.setAttribute('fill', 'lightgreen')
      // }
    })
    .catch((error) => console.error('Gagal memuat SVG:', error))
})
