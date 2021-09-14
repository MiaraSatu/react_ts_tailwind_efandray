import { Component, } from "react";
import Disconnected from "./disconnected/Disconnected"
import Connected from "./connected/Connected"
import { BrowserRouter as Router,Route } from "react-router-dom";

type efandrayProps = {
	// les types de mes props
}
type efandrayStates = {
    // les types de les states
}

class Efandray extends Component<efandrayProps, efandrayStates> {

	render() {
		return (
			<Router>
				<div className="h-full w-full flex">
					<Route path="/" exact component={Disconnected}/>
					<Route path="/connected" component={Connected} />
				</div>
			</Router>
		)
	}
}

export default Efandray