import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
	summer: { text: "lets hit the beach", icon: "sun" },
	winter: { text: "Burr it is cold!", icon: "snowflake" }
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};
export default function SeasonDisplay(props) {
	let season = getSeason(props.lattitude, new Date().getMonth());
	const { text, icon } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	);
}
