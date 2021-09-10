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

    }

    render() {
        const contextData: desconnectedInterface = this.state
        return (
            <disconnectedContext.Provider value={contextData}>
                <div className="w-full h-full flex" id="disconnected">
                    <div className="w-8/12 h-4/5 bg-gray-100 rounded-xl my-auto mx-auto flex px-5 py-5">
                        <div className=" w-6/12 flex rounded-l-xl" id="subDisconnected">
                            <div className="w-10/12 mx-auto my-auto text-center">
                                <div className="text-2xl text-gray-800 font-bold">Welcome to E-Fandray!</div>
                                <div className="text-xs text-gray-700">
                                    This web site is developed by <span className="text-md text-gray-900 font-bold">RAMARIJAONA Miaramanjaka Satu</span>  
                                     alias <span className="text-md text-gray-800">Miara Satu</span> <span>IGGLIA 3 numéro 17</span>
                                </div>
                            </div>
                        </div>
                        <div className=" w-6/12 bg-gray-100 rounded-r-xl px-10 py-10">
                            <div className="w-full text-center">
                                <div className="text-2xl font-bold text-gray-700 mb-2">
                                    Get started
                                </div>
                                <div className="text-sm text-gray-500">
                                    Already have a account? <span className=" text-green-500">Sign In</span>
                                </div>
                            </div>
                            <form className="w-full my-5">
                                <div className="w-full mt-4">
                                    <label htmlFor="" className="block text-gray-400 text-sm">Name</label>
                                    <input type="text" className="w-full border-b border-gray-400 shadow focus:outline-none"/>
                                </div>
                                <div className="w-full mt-4">
                                    <label htmlFor="" className="block text-gray-400 text-sm" >Email</label>
                                    <input type="text" className="w-full border-b border-gray-400 shadow focus:outline-none" />
                                </div>
                                <div className="w-full mt-4">
                                    <label htmlFor="" className="block text-gray-400 text-sm" >Password</label>
                                    <div className="w-full flex">
                                        <input type="text" className="w-11/12 border-b border-gray-400 shadow focus:outline-none" />
                                        <i className="fas fa-eye-slash"></i>
                                        {/* <i className="fas fa-eye"></i> */}
                                    </div>
                                </div>
                            </form>
                            <div className="w-full flex">
                                <button className="text-gray-50 text-xs font-bold bg-green-600 w-3/4 py-2 rounded-md mx-auto">Sign Up</button>
                            </div>
                            <div className="w-full flex flex-row pt-5">
                                <hr className="w-1/3 border-t border-gray-300 mt-2" />
                                <div className="w-1/3 text-center text-xs text-gray-500">Or Sign Up with</div>
                                <hr className="w-1/3 border-t border-gray-300 mt-2" />
                            </div>
                            <div className="w-full flex justify-center pt-3">
                                <i className="fab fa-google mx-3"></i>
                                <i className="fab fa-facebook mx-3"></i>
                                <i className="fab fa-twitter mx-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </disconnectedContext.Provider>
        )
    }
}

export default Disconnected