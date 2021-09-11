import { Component, ChangeEvent, FormEvent, MouseEvent, SyntheticEvent } from "react";

type createProps = {
    // 
}

type createStates = {
    // 
    name: string,
    email: string,
    password: string,
    isVisible: boolean // visibilité du mot de passe
}

class Create extends Component<createProps, createStates> {

    handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        switch(e.target.name) {
            case 'name':
                this.setState({name: e.target.value});
            break;
            case 'email':
                this.setState({email: e.target.value});
            break;
            case 'password':
                this.setState({password: e.target.value});
            break;
            default:
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
        name: "",
        email: "",
        password: "",
        isVisible: false
    }

    render() {
        return (
                <div className=" w-6/12 bg-gray-100 rounded-r-xl px-10 py-10">
                    <div className="w-full text-center">
                        <div className="text-2xl font-bold text-gray-700 mb-2">
                            Get started
                        </div>
                        <div className="text-sm text-gray-500">
                            Already have an account? <span className=" text-green-500">Sign In</span>
                        </div>
                    </div>
                    <form className="w-full my-5">
                        <div className="w-full mt-4">
                            <label htmlFor="name" className="block text-gray-400 text-sm">Name</label>
                            <input type="text" className="w-full border-b border-gray-400 shadow focus:outline-none" name="name" id="name" onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="email" className="block text-gray-400 text-sm" >Email</label>
                            <input type="text" className="w-full border-b border-gray-400 shadow focus:outline-none" name="email" id="email" onChange={this.handleChange} value={this.state.email} />
                        </div>
                        <div className="w-full mt-4">
                            <label htmlFor="" className="block text-gray-400 text-sm" >Password</label>
                            <div className="w-full flex">
                                <input type={(this.state.isVisible) ? 'text' : 'password'} className="w-11/12 border-b border-gray-400 shadow focus:outline-none" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
                                <i className={"mt-2 "+((this.state.isVisible) ? "fas fa-eye-slash" :"fas fa-eye") }   onClick={this.handleHide}></i>
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
        )
    }
}

export default Create
                {/* <form onSubmit={this.handleSubmit} >
                    <label htmlFor="nom" className="block text-gray-700">Nom:</label>
                    <input type="text" className="block border border-gray-500 rounded-md px-2 py-1 w-full" onChange={this.handleChange} value={this.state.nom} />
                    <label htmlFor="prenom" className="block text-gray-700">Prenom:</label>
                    <input type="text" className="block border border-gray-500 rounded-md px-2 py-1 w-full" onChange={this.handleChange} value={this.state.prenom}/>
                    <label htmlFor="numero" className="block text-gray-700">Numero:</label>
                    <input type="text" className="block border border-gray-500 rounded-md px-2 py-1 w-full" onChange={this.handleChange} value={this.state.numero}/>
                    <label htmlFor="genre" className="block text-gray-700">Genre:</label>
                    <select name="genre" id="genre" onChange={this.handleSelect} value={this.state.genre}>
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                    <label htmlFor="motDePasse" className="block text-gray-700">Mot de passe</label>
                    <input type="text" className="block border border-gray-500 rounded-md px-2 py-1 w-full" onChange={this.handleChange} value={this.state.motDePasse}/>
                    <button type="submit" className="text-gray-50 text-md border border-green-700 bg-green-700 w-full rounded-md py-1 mt-3">s'inscrire</button>
                </form> */}