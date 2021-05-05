//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application

let contador = 0;
setInterval(() => {
	let numUno = Math.floor(contador / 1) % 10;
	let numDos = Math.floor(contador / 10) % 10;
	let numTres = Math.floor(contador / 100) % 10;
	let numCuatro = Math.floor(contador / 1000) % 10;
	let numCinco = Math.floor(contador / 10000) % 10;
	let numSeis = Math.floor(contador / 100000) % 10;
	contador++;
	ReactDOM.render(
		<Home
			numUno={numUno}
			numDos={numDos}
			numTres={numTres}
			numCuatro={numCuatro}
			numCinco={numCinco}
			numSeis={numSeis}
		/>,
		document.querySelector("#app")
	);
}, 10);
