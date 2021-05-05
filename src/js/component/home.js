import React from "react";
import PropTypes from "prop-types";

//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div className="flex-container">
			<div className="watch">
				<i className="far fa-clock"></i>
			</div>
			<div className="watch">
				<h1 className="numero">{props.numSeis}</h1>
			</div>
			<div className="watch">
				<h1>{props.numCinco}</h1>
			</div>
			<div className="watch">
				<h1>{props.numCuatro}</h1>
			</div>
			<div className="watch">
				<h1>{props.numTres}</h1>
			</div>
			<div className="watch">
				<h1>{props.numDos}</h1>
			</div>
			<div className="watch">
				<h1>{props.numUno}</h1>
			</div>
		</div>
	);
}

Home.propTypes = {
	numUno: PropTypes.string,
	numDos: PropTypes.string,
	numTres: PropTypes.string,
	numCuatro: PropTypes.string,
	numCinco: PropTypes.string,
	numSeis: PropTypes.string
};
