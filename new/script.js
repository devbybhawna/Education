const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const bars = document.querySelectorAll('.bar');

menuToggle.addEventListener('click', () => {
    bars.forEach((bar)=>{
        bar.classList.toggle('active')
    console.log("sachin")
  })
  menu.classList.toggle('activeMenu')
});

// Close the menu if a menu item is clicked (optional)
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('activeMenu');
    bars.forEach((bar)=>{
      bar.classList.remove('active')
  console.log("sachin")
  })
  });
});