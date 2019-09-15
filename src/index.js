import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import { classImplements } from "@babel/types";

function App() {
	const [state, setState] = useState({ lat: null });
	function renderContent() {
		if (state.errorMesage && !state.lat) {
			return <div> Error: {state.errorMesage}</div>;
		}
		if (!state.errorMesage && state.lat) {
			return <SeasonDisplay lat={state.lat} />;
		}

		return <Spinner message="Please accept location request" />;
	}
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

	return <div className="border red">{renderContent()}</div>;
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
