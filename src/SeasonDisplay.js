import React from "react";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "summer" : "winter";
	} else {
		return lat > 0 ? "winter" : "summer";
	}
};
export default function SeasonDisplay(props) {
	let season = getSeason(props.lattitude, new Date().getMonth());
	return (
		<div>
			{season === "winter" ? "burr it's chilly!" : "lets hit the beach!"}
		</div>
	);
}
