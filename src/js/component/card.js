import React from "react";
import PropTypes from "prop-types";

const card = props => {
	return (
		<div className="card tarjeta">
			<img
				className="card-img-top"
				src={props.link}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href={"#"} className="btn btn-primary">
					Find Our More!
				</a>
			</div>
		</div>
	);
};

card.propTypes = {
	link: PropTypes.string
};

export default card;
