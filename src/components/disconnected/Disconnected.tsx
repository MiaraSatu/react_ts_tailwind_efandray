import { Component, MouseEvent } from "react";
import disconnectedContext from "../../contexts/disconnected-context";
import discoInterface from "../../contexts/disco-interface";
import Login from "./Login";
import Create from "./Create";

type disconnectedProps = {
    // les types de mes props
}
type disconnectedStates = {
    // les types de mes states
    pageActu: string,
    handleChangePage(e: MouseEvent<HTMLDivElement>, destination: string): void,

}

class Disconnected extends Component<disconnectedProps, disconnectedStates> {

    handleChangePage = (e: MouseEvent<HTMLDivElement>, destination: string):void => {
        this.setState({pageActu: destination})
    }

    state = {
        // my states
        pageActu: "login",
        handleChangePage: this.handleChangePage
    }

    render() {
        const data: discoInterface = this.state;
        console.log(data);
        return (
            <disconnectedContext.Provider value={data}>
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
                        { this.state.pageActu === 'login' && <Login /> }
                        { this.state.pageActu === 'create' && <Create />}
                    </div>
                </div>
            </disconnectedContext.Provider>
        )
    }
}

export default Disconnected
