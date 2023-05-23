// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".category");

// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle('bx-x');
//     category.classList.toggle('active')
// }

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("#nav-menu .category a");

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset&& top < offset+height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('#nav-menu .category a[href*=' + id + ']').classList.add('active')
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector("#nav-menu")

    header.classList.toggle('sticky',window.scrollY > 100);
}