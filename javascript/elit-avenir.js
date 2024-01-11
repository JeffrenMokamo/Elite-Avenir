const pageActive = window.location.pathname;
const links = document.querySelectorAll('.links-nav-ba');
const contents = document.querySelectorAll('.tabpers');
let index = 0, indexC = 0;


links.forEach(link => {

        if (link.href.includes(pageActive)) {
            if (link.classList.contains('active-l')) {
                return;
            }
            else {
                (function () {
                    for (let i = 0; i < links.length; i++) {
                        links[i].classList.remove('active-l');
                    }
                })();
                link.classList.add('active-l');
            }
        }
})

const formsLinks = document.querySelectorAll('.formLinks');

formsLinks.forEach(formlink => {
    formlink.onclick = () => {

        if (formlink.classList.contains('active-link-form')) {
            return;
        }
        else {
            (function () {
                for (let i = 0; i < formsLinks.length; i++) {
                    formsLinks[i].classList.remove('active-link-form');
                }
            })();
            formlink.classList.add('active-link-form');
        }

        index = formlink.getAttribute('data-anim');

        for (let i = 0; i < contents.length; i++) {

            if (contents[i].getAttribute('data-anim') == index) {
                contents[i].classList.add('activeTab');
            }
            else {
                contents[i].classList.remove('activeTab');
            }
        }

    }

})

const sousMenu = document.querySelector('nav ul li ul');

function affiche(){

    sousMenu.classList.add('sous-menu');
}

function desaffiche(){
    sousMenu.classList.remove('sous-menu');
}