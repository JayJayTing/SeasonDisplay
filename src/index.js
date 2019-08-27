import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

function App() {
	const [state, setState] = useState({ lat: null });

	useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				setState({ lat: position.coords.latitude, errorMesage: "" });
			},
			err => {
				setState({ errorMessage: err.message });
			}
		);
	}, []);

	return (
		<div>
			<SeasonDisplay latitude={state.lat} error={state.errorMessage} />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
