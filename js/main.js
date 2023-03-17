let contador = true;

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carouselLista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carouselIndicadores',
		arrows: {
			prev: '.carouselAnterior',
			next: '.carouselSiguiente'
		},
		responsive: [
			{
			  // screens greater than >= 650px
			  breakpoint: 650,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 900px
			  breakpoint: 900,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});
});

function listeners() {
    const navBar = document.getElementsByClassName("navBar")[0];
    navBar.addEventListener("click", verNav);

    const btnColorLuna = document.getElementsByClassName("bgcMoon")[0];
    btnColorLuna.addEventListener("click", cambiarBGC);
}

function verNav() {
    let nav = document.getElementsByTagName("nav")[0];

    if (contador === true) {
        nav.style.display = "flex";
        contador = false;
    } else {
        nav.style.display = "none";
        contador = true;
    }
}

function cambiarBGC() {
    const body = document.getElementsByTagName("body")[0];
    const paboutMe = document.getElementsByClassName("paboutMe")[0];
    const gitI = document.getElementsByClassName("github")[0];
	const cardTextP = document.querySelectorAll(".cardText p");

    if (contador === true) {
        body.style.backgroundColor = "rgb(3 10 18 / 93%)";
        paboutMe.style.color = "#fff";
        gitI.style.color = "white";
		
		for (let index = 0; index < cardTextP.length; index++) {
			cardTextP[index].style.color = "white";
		}
        contador = false;
    } else {
        body.style.backgroundColor = "rgb(241 234 234 / 21%)";
        paboutMe.style.color = "initial";
        gitI.style.color = "initial";
		for (let index = 0; index < cardTextP.length; index++) {
			cardTextP[index].style.color = "black";
		}
        contador = true;
    }
}

listeners();