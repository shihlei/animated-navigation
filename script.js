const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(direction1, direction2) {
    //local var & index
    navItems.forEach((nav, i) => {
        //counter start 0, so need to +1 to start with 1
      nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
  }

function toggleNav() {
    // Toggle: Menu Bars Open/Closed -> animate hambuger menu
    menuBars.classList.toggle('change');

    // Toggle: Menu Active -> show nav
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay -> show menu
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');

        // Helper function -> Animate In - Nav Items
        navAnimation('out','in');
    } else{
        // Animate Out - Overlay -> get rid of menu
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
        
        // Helper function -> Animate Out - Nav Items
        navAnimation('in','out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
// Get into the section, hide hav
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
  });
