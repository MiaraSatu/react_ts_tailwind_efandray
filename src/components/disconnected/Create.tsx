import { Component, ChangeEvent, FormEvent, MouseEvent, SyntheticEvent } from "react";

type createProps = {
    // 
}

type createStates = {
    // 
    nom: string,
    prenom: string,
    numero: string,
    genre: string,
    motDePasse: string,
    hide: boolean
}

class Create extends Component<createProps, createStates> {

    handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        switch(e.target.name) {
            case 'nom':
                this.setState({nom: e.target.value});
            break;
            case 'prenom':
                this.setState({prenom: e.target.value});
            break;
            case 'numero':
                this.setState({numero: e.target.value});
            break
            case 'genre':
                this.setState({genre: e.target.value});
            break;
            case 'motDePasse':
                this.setState({motDePasse: e.target.value});
            break;
        }
    }

    handleSelect = (e: SyntheticEvent<HTMLSelectElement>):void => {
        this.setState({genre: e.currentTarget.value})
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        console.log(this.state.genre)
    }

    handleHide = (e: MouseEvent<HTMLButtonElement>):void => {
        this.setState({hide: !this.state.hide})
    }

    state = {
        nom: "",
        prenom: "",
        numero: "",
        genre: "",
        motDePasse: "",
        hide: true
    }

    render() {
        return (
            <div className="mt-10 px-5 py-2 bg-gray-200 rounded-xl">
                <h2 className="uppercase text-2xl border-b-1 w-60">Create your account</h2>
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
                <form action="">
                    
                </form>
            </div>
        )
    }
}

export default Create