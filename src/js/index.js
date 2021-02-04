//import react into the bundle
import React, { Component, usestate, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import Navbar from "./component/Navbar.js";
import Jumbotron from "./component/jumbotron.js";
import Card from "./component/card.js";
import Footer from "./component/footer.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron />

			<div className="contenedor">
				<Card link="https://picsum.photos/seed/picsum/200/300" />
				<Card link="https://picsum.photos/id/237/200/300" />
				<Card link="https://picsum.photos/200/300?grayscale" />
				<Card link="https://picsum.photos/200/300" />
			</div>
		</div>
		<Footer />
	</div>,
	document.querySelector("#app")
);
