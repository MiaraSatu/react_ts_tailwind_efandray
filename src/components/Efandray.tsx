import { Component, FormEvent, MouseEvent } from "react";
import Disconnected from "./disconnected/Disconnected"
import Connected from "./connected/Connected"

type efandrayProps = {
	// les types de mes props
}
type efandrayStates = {
    // les types de les states
}

class Efandray extends Component<efandrayProps, efandrayStates> {

	render() {
		return (
			
            <div className="h-full w-full flex">
                {/* <Disconnected /> */}
				<Connected />
            </div>
		)
	}
}

export default Efandray