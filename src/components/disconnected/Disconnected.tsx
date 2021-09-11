import { ChangeEvent, Component, FormEvent, MouseEvent } from "react";
import disconnectedContext from "./contexts/disconnected-context";
import Login from "./Login";
import Create from "./Create";
import desconnectedInterface from "./contexts/desconnected-interface";

type disconnectedProps = {
    // les types de mes props
}
type disconnectedStates = {
    // les types de mes states
}

class Disconnected extends Component<disconnectedProps, disconnectedStates> {

    state = {
        // my states
    }

    render() {
        return (
            <div className="w-full h-full flex" id="disconnected">
                <div className="w-8/12 h-4/5 bg-gray-100 rounded-xl my-auto mx-auto flex px-5 py-5" id="discoContainer">
                    <div className=" w-6/12 flex rounded-l-xl" id="subDisconnected">
                        <div className="w-10/12 mx-auto my-auto text-center">
                            <div className="text-2xl text-gray-800 font-bold">Welcome to E-Fandray!</div>
                            <div className="text-xs text-gray-700">
                                This web site is developed by <span className="text-md text-gray-900 font-bold">RAMARIJAONA Miaramanjaka Satu</span>  
                                    alias <span className="text-md text-gray-800">Miara Satu</span> <span>IGGLIA 3 numéro 17</span>
                            </div>
                        </div>
                    </div>
                    <Login />
                    {/* <Create /> */}
                </div>
            </div>
        )
    }
}

export default Disconnected
