import { Component, FormEvent, MouseEvent } from "react";
import Disconnected from "./disconnected/Disconnected"

type efandrayProps = {
	// les types de mes props
}
type efandrayStates = {
    // les types de les states
}

class Efandray extends Component<efandrayProps, efandrayStates> {

	render() {
		return (
			
            <div className="h-full w-full">
                <Disconnected />
            </div>
		)
	}
}

export default Efandray