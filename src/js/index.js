//import react into the bundle
import React, { Component } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import Navbar from "./component/Navbar.js";
import Jumbotron from "./component/jumbotron.js";
import Card from "./component/card.js";
//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<div className="container">
			<Jumbotron />

			<div class="row">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	</div>,
	document.querySelector("#app")
);
