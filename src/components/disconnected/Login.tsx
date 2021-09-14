import { Component, ChangeEvent, FormEvent, MouseEvent } from "react";
import disconnectedContext from "../../contexts/disconnected-context";
import { Link  } from "react-router-dom";

type loginProps = {
    // 
}
type loginStates = {
    // 
    email: string,
    password: string,
    isVisible: boolean
}

class Login extends Component<loginProps, loginStates>{

    handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        switch (e.target.name){
            case 'email':
                this.setState({email: e.target.value});
            break;
            case 'password':
                this.setState({password: e.target.value});
            break;
        }
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
    }

    handleHide = (e: MouseEvent<HTMLButtonElement>):void => {
        this.setState({isVisible: !this.state.isVisible})
    }

    state = {
        email: "",
        password: "",
        isVisible: false
    }

    render() {
        return (
            <disconnectedContext.Consumer>{
                    (value) => (
                        <div className=" w-6/12 bg-gray-100 rounded-r-xl px-10 py-10">
                            <div className="w-full text-center">
                                <div className="text-2xl font-bold text-gray-700 mb-2">
                                    Get started
                                </div>
                                <div className="text-sm text-gray-500" onClick={(e) => value?.handleChangePage(e, 'create')}>
                                    Don't have an account? just click <span className=" text-green-500">Sign Up</span>
                                </div>
                            </div>
                            <form className="w-full my-5">
                                <div className="w-full mt-4">
                                    <label htmlFor="" className="block text-gray-400 text-sm" >Email</label>
                                    <input type="text" className="w-full border-b border-gray-400 shadow focus:outline-none" name="email" id="email" onChange={this.handleChange} value={this.state.email} />
                                </div>
                                <div className="w-full mt-4">
                                    <label htmlFor="" className="block text-gray-400 text-sm" >Password</label>
                                    <div className="w-full flex">
                                        <input type={ this.state.isVisible ? 'text' : 'password'} className="w-11/12 border-b border-gray-400 shadow focus:outline-none" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
                                        <i className={ "mt-2 "+(this.state.isVisible ? "fas fa-eye-slash" : "fas fa-eye")} onClick={this.handleHide}></i>
                                    </div>
                                </div>
                            </form>
                            <div className="w-full flex">
                                <Link to='/connected' className="w-full flex">
                                    <button className="text-gray-50 text-xs font-bold bg-green-600 w-3/4 py-2 rounded-md mx-auto">Sign In</button>
                                </Link>
                            </div>
                            <div className="w-full flex flex-row pt-5">
                                <hr className="w-1/3 border-t border-gray-300 mt-2" />
                                <div className="w-1/3 text-center text-xs text-gray-500">Or Sign In with</div>
                                <hr className="w-1/3 border-t border-gray-300 mt-2" />
                            </div>
                            <div className="w-full flex justify-center pt-3">
                                <i className="fab fa-google mx-3"></i>
                                <i className="fab fa-facebook mx-3"></i>
                                <i className="fab fa-twitter mx-3"></i>
                            </div>
                        </div>
                    )
                }
            </disconnectedContext.Consumer>
        )
    }
}

export default Login 
