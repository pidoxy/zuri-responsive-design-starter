


const func = () => {
    const toggle = document.getElementById("hamburger");
    const nav_links = document.querySelector("ul.nav-links");

    if (toggle.classList.contains("is-active")){
        toggle.classList.remove("is-active");
        nav_links.classList.add("d-none");
        nav_links.classList.remove("d-block");

    } else {
        toggle.classList.add("is-active");
        nav_links.classList.add("d-block");
        nav_links.classList.remove("d-none");


    }

}

