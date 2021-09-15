import { Component, ChangeEvent, FormEvent, MouseEvent } from "react";
import connectedContext from "../../contexts/connected-context";
import connectedInterface from "../../contexts/connected-interface";
import MessagesSection from "./MessagesSection";
import DefaultMessages from "../../data/DefaultMessages";
import { formatDistance } from "date-fns";
import { enGB } from "date-fns/esm/locale";

type messageType = {
    id: number, contains: string, createdAt: string, mine: boolean
}
type conversationType = {
    owner: string,
    messages: messageType[]
}

type connectedProps = {
    // mes props
}

type connectedStates = {
    // mes states
    lastIndex: number,
    now: Date,
    newMessage: string,
    ownerFocused: string,
    isFirstSend: boolean,
    conversations: conversationType[],
    formateDate(date: string):string,
    formateString(contains: string, max: number): string,
    handleChangeFocusMessage(e: MouseEvent<HTMLDivElement>): void,
}

class Connected extends Component<connectedProps, connectedStates> {

    componentDidMount = () => {
        setInterval( ()=> {
            this.setState({now: new Date()})
        }, 1000);
        const indexOfDiez = window.location.href.lastIndexOf('#')
        if( indexOfDiez !== -1)
            window.location.href = window.location.href.substring(0, indexOfDiez);
    }

    formateDate = (date: string):string => {
        return formatDistance(new Date(date), new Date(), {locale: enGB});
    }

    formateString = (contains: string, max: number): string => {
        if(contains.length > max) {
            return contains.substring(0, max)+"..."
        }
        return contains
    } 

    handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        this.setState({newMessage: e.target.value})
    }

    handleSubmit = (e: FormEvent<HTMLFormElement>, owner: string):void => {
        e.preventDefault();
        const conversations = [...this.state.conversations]
        const index = conversations.findIndex( (conversation)=> conversation.owner === owner );
        const messages = [...conversations[index].messages, {id: this.getLastIndex(), contains: this.state.newMessage, createdAt: (new Date()).toUTCString(), mine: true }]
        const newMessages = {...conversations[index]};
        newMessages.messages = messages;
        conversations[index] = newMessages;
        this.setState({conversations: conversations, newMessage: ""});
        setTimeout( ()=>{ window.location.href= (this.state.isFirstSend) ? window.location.href : window.location.href+"#bottom"; this.setState({isFirstSend: true}) }, 1)
    }

    getLastIndex = (): number => {
        this.setState({lastIndex: this.state.lastIndex + 1})
        return this.state.lastIndex;
    }

    handleChangeFocusMessage = (e: MouseEvent<HTMLDivElement>): void => {
        this.setState({ownerFocused: e.currentTarget.id});
    }

    state = {
        lastIndex: 20,
        now: new Date(),
        newMessage: '',
        isFirstSend: false,
        ownerFocused: 'Alexis',
        conversations: DefaultMessages,
        formateDate: this.formateDate,
        formateString: this.formateString,
        handleChangeFocusMessage: this.handleChangeFocusMessage,
    }
    render() {
        const data: connectedInterface = this.state;
        return (
            <connectedContext.Provider value={data}>
                <div className="w-full h-full mx-auto my-auto bg-gray-50 rounded-3xl p-4 flex">
                    {/* c est la barre de navigation */}
                    <div className=" w-16 h-full bg-indigo-900 flex flex-col justify-between rounded-xl text-gray-400 text-center py-5">
                        <div className="text-gray-50 text-3xl"><i className="fas fa-envelope-open"></i></div>
                        <div><i className="far fa-comment-dots"></i></div>
                    </div>
                    {/* la section qui contient les messages */}
                    <MessagesSection />
                    {/* la section qui contient la conversation fucused */}
                    <div className=" w-1/2 p-2 mx-5 flex flex-col justify-between">
                        {/* header du sous-section */}
                        <div className="w-full flex justify-between shadow-md">
                            <div className="flex">
                                <img src={"images/"+(this.state.conversations.findIndex((conversation => conversation.owner === this.state.ownerFocused)) + 1)+".jpg"} alt="myimage" className="w-14 h-14 rounded-full object-cover" />
                                <div className="ml-3">
                                    <div className="text-lg text-gray-900 font-bold">{this.state.ownerFocused}</div>
                                    <div className="text-sm text-gray-400">Active now</div>
                                </div>
                            </div>
                            <div className="flex">
                                <div><i className="fas fa-phone-alt mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                                <div><i className="fas fa-video mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                                <div><i className="fas fa-ellipsis-v mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                            </div>
                        </div>
                        <div className="overflow-auto">
                            {
                                this.state.conversations[this.state.conversations.findIndex((conv)=> conv.owner === this.state.ownerFocused)].messages.map( message => (
                                    <div className="w-full mb-3" key={message.id}>
                                        <div className="w-full flex items-end">
                                            { (!message.mine) ? <img src={"images/"+(this.state.conversations.findIndex(conversation => conversation.owner === this.state.ownerFocused)+1)+".jpg"} alt="myImage" className="h-7 w-7 object-cover rounded-full mr-3"/> : '' }
                                            <div className={"flex w-full "+((message.mine) ? 'justify-end' : 'justify-start')}>
                                                <span className={"px-5 py-2 rounded-lg text-sm "+((message.mine) ? 'bg-gray-300 text-gray-900 ' : 'bg-indigo-900 text-gray-50' )+" "+((message.contains.length > 50)? 'block w-2/3': '' )}>
                                                    {message.contains}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={"block text-xs text-gray-500 "+((message.mine) ? 'text-right mr-1' : 'text-left ml-10' )}>
                                            {this.formateDate(message.createdAt)}
                                        </span>
                                    </div>
                                )) 
                            }
                            <div id="bottom"></div>
                        </div>
                        <div className="w-full flex">
                            <form className="w-full flex items-center justify-between" onSubmit={(e)=>{this.handleSubmit(e, this.state.ownerFocused)}}>
                                <div className="block w-11/12" >
                                    <input type="text" placeholder="Type your message" name="newMessage" value={this.state.newMessage} onChange={this.handleChange} className="w-full border border-gray-300 rounded-2xl text-sm px-3 py-1 focus:outline-none" />
                                </div>
                                <button type="submit">
                                    <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                            <div></div>
                        </div>
                    </div>
                    <div className="h-full w-1/5 p-2 flex flex-col justify-between">
                        <div className="w-full h-10 flex items-center justify-end">
                            <i className="fas fa-envelope-open block text-white p-2 bg-gray-300 rounded-full"></i>
                            <div className="w-1/2 flex items-center justify-end">
                                <img src="images/4.jpg" alt="profil" className="h-8 w-8 rounded-full object-cover" />
                                <div className="text-xs text-gray-900 py-1 pl-1 pr-3 bg-gray-200 rounded-r-lg">Ramarijaona</div>
                            </div>
                        </div>
                        <div className="flex h-4/5 flex-col justify-between">
                            {/* about friend */}
                            <div className="w-full rounded-lg p-8 bg-gray-100 border border-gray-200 text-sm">
                                <img src={"images/"+(this.state.conversations.findIndex(conversation => conversation.owner === this.state.ownerFocused) + 1)+".jpg"} alt="profil" className="w-20 h-20 rounded-full object-cover object-left mx-auto" />
                                <div className="w-full text-md text-gray-600">
                                    <div className="my-2 flex">
                                    <i className="fas fa-at"></i><span className="ml-3">{this.state.ownerFocused}@gmail.com</span>
                                    </div>
                                    <div>
                                    <i className="fas fa-user-circle"></i><span className="ml-3">{this.state.ownerFocused}</span>
                                    </div>
                                </div>
                                <div className="w-full flex">
                                    <button className=" px-4 p-1 mx-auto mt-5 text-blue-600 border border-blue-600 bg-gray-50 rounded-md">
                                        Archive<i className="fas fa-boxes ml-2"></i>
                                    </button>
                                </div>
                            </div>
                            {/* about dever */}
                            <div className="w-full">
                                <div className="flex items-center w-full justify-around">
                                    <hr className="w-1/4 border-gray-900" />
                                    <div className=" uppercase text-center text-gray-700">About developper</div>
                                    <hr className="w-1/4 border-gray-900" />
                                </div>
                                <div className="w-full text-gray-600 text-sm">
                                    <div className="w-full flex items-center mt-3">
                                        <i className="fas fa-user-tie ml-2 mr-3"></i>
                                        <span>RAMARIJAONA Miaramanjaka Satu IGGLIA 3 n°17</span>
                                    </div>
                                    <div className="w-full flex items-center mt-3">
                                        <i className="fas fa-phone-alt ml-2 mr-3"></i>
                                        <span>032.29.210.84</span>
                                    </div>
                                    <div className="w-full flex items-center mt-3">
                                        <i className="fab fa-facebook ml-2 mr-3"></i>
                                        <span>Miara Satu</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </connectedContext.Provider>
        )
    }
}

export default Connected