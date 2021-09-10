import { Component, ChangeEvent, FormEvent, MouseEvent } from "react";
import disconnectedContext from "./contexts/disconnected-context";

type loginProps = {
    // 
    title: string
}
type loginStates = {
    // 
    numero: string,
    motDePasse: string,
    hide: boolean
}

class Login extends Component<loginProps, loginStates>{

    handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        switch (e.target.name){
            case 'numero':
                this.setState({numero: e.target.value});
            break;
            case 'motDePasse':
                this.setState({motDePasse: e.target.value});
            break;
        }
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        console.log(this.state.numero);
    }

    handleHide = (e: MouseEvent<HTMLButtonElement>):void => {
        this.setState({hide: !this.state.hide})
    }

    state = {
        numero: "",
        motDePasse: "",
        hide: true
    }

    render() {
        return (
            <disconnectedContext.Consumer>
            {
                (value) => (
                    // <div className="mt-10 px-5 py-2 bg-gray-200 rounded-xl">
                    //     <h2 className="uppercase text-2xl border-b-1 w-60">Login</h2>
                    //     <form className="w-full" onSubmit={this.handleSubmit}>
                    //         <label htmlFor="numero" className="block text-gray-700">Numéro:</label>
                    //         <input type="text" name="numero" id="numero" className="block border border-gray-500 rounded-md px-2 py-1 w-full" onChange={this.handleChange} value={this.state.numero} />
                    //         <label htmlFor="motDePasse" className="block text-gray-700" >Mot de passe:</label>
                    //         <div className="w-full flex justify-between">
                    //             <input type="password" name="motDePasse" id="motDePasse" className="border border-gray-500 rounded-md px-2 py-1 w-8/12" onChange={this.handleChange} value={this.state.motDePasse} />
                    //             <button type="button" className=" text-gray-50 bg-gray-500 rounded-lg p-1 px-3 w-3/12" onClick={this.handleHide}> {(this.state.hide) ? 'voir': 'cacher'}</button>
                    //         </div>
                    //         <button type="submit" className=" w-full text-gray-50 text-md mt-3 px-2 py-1 rounded-md block border border-blue-800 bg-blue-700" >connecter</button>
                    //         <button type="button" className=" w-full text-gray-50 text-md mt-3 px-2 py-1 rounded-md block border border-green-800 bg-green-600">créer un compte</button>
                    //     </form>
                    // </div>
                    <>
                        <div className="">
                            <span className="block text-2xl text-gray-800">Get started</span>
                           
                        </div>
                        {/* {this.props.title} */}
                    </>
                )
            }
            </disconnectedContext.Consumer>
        )
    }
}

export default Login 
