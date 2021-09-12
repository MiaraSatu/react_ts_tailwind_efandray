import { Component, ChangeEvent, FormEvent } from "react";
import connectedContext from "../../contexts/connected-context";
import connectedInterface from "../../contexts/connected-interface";
import MessagesSection from "./MessagesSection";
import { formatDistance } from "date-fns";
import { enGB } from "date-fns/esm/locale";

// our usual types type
type messageType = {
    id: number,
    sender: string,
    contains: string,
    createdAt: string,
}

type connectedProps = {
    // mes props
}
type connectedStates = {
    // mes states
    now: Date,
    newMessage: string,
    messages: messageType[],
    conversations: {id: number, message: string, envoi: string, mine: boolean}[],
    formateDate(date: string):string,
    formateString(contains: string, max: number): string
}

class Connected extends Component<connectedProps, connectedStates> {

    componentDidMount = () => {
        setInterval( ()=> {
            this.setState({now: new Date()})
        }, 1000);
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

    handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        const conversations = [...this.state.conversations, {id: 10, message: this.state.newMessage, envoi: new Date().toUTCString(), mine: true}]
        this.setState({conversations: conversations})
        // console.log(new Date().toUTCString())
    }

    state = {
        now: new Date(),
        newMessage: '',
        messages: [{
                id: 1,
                sender: "Marc Arison",
                contains: "Hello frero! why you don't reply me?",
                createdAt: "2021-09-11 22:04:26",},
                {id: 2,
                sender: "Adams",
                contains: "Lorem ispum, mito pestenada ario nepteda",
                createdAt: "2021-09-11 22:06:05",},
                {id: 3,
                sender: "Allan",
                contains: "you're welcome my friend!",
                createdAt: "2021-09-11 22:16:18",},
                {id: 4,
                sender: "Rakoto",
                contains: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur labore aliquid sequi odio maxime vel, laborum, illo laudantium soluta modi omnis vitae, quisquam reprehenderit consequatur alias non eius excepturi.",
                createdAt: "2021-09-12 14:23:01",}
        ],
        conversations: [
            {id: 1, message: "Hello frero! why you don't reply me?", envoi: "2021-09-11 22:04:26", mine: false},
            {id: 2, message: "Hello, oh! im sorry i don't speak english", envoi: "2021-09-11 22:04:26", mine: true},
            {id: 3, message: "Lorem ispum", envoi: "2021-09-11 22:04:26", mine: false},
            {id: 5, message: "Quia dolorem blanditiis explicabo?", envoi: "2021-09-12 16:04:03", mine: false},
            {id: 6, message: "Lorem tatatapany", envoi: "2021-09-12 16:04:03", mine: true},
            {id: 7, message: "Totam sequi ea aut", envoi: "2021-09-12 16:04:03", mine: true},
            // {id: 8, message: "Totam sequi ea aut", envoi: "2021-09-12 16:04:03", mine: true},
            {id: 8, message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione sint sed aliquam neque dolores reiciendis at nesciunt numquam quidem eum. Deserunt iure amet error perferendis quaerat itaque ad earum laborum?", envoi: "2021-09-12 16:04:03", mine: true},
            {id: 9, message: "reiciendis at nesciunt numquam quidem eum.quidem eum.", envoi: "2021-09-12 16:04:03", mine: false}
        ],
        formateDate: this.formateDate,
        formateString: this.formateString
    }
    render() {
        const data: connectedInterface = this.state
        return (
            <connectedContext.Provider value={data}>
            <div className="w-11/12 mx-auto h-5/6 my-auto bg-gray-50 rounded-3xl p-4 flex">
                {/* c est la barre de navigation */}
                <div className=" w-16 h-full bg-green-700 flex flex-col justify-between rounded-xl text-gray-400 text-center py-5">
                    <div className="text-gray-50 text-3xl"><i className="fas fa-envelope-open"></i></div>
                    <div><i className="far fa-comment-dots"></i></div>
                    <div><i className="far fa-calendar-alt"></i></div>
                    <div><i className="fas fa-user-tie"></i></div>
                    <div><i className="fas fa-users"></i></div>
                    <div><i className="fas fa-user-clock"></i></div>
                    <div><i className="fas fa-power-off"></i></div>
                    <div><i className="fas fa-phone-alt"></i></div>
                    <div><i className="fas fa-video"></i></div>
                </div>
                {/* la section qui contient les messages */}
                <MessagesSection />
                {/* la section qui contient la conversation fucused */}
                <div className=" w-1/2 p-2 mx-5">
                    {/* header du sous-section */}
                    <div className="w-full flex justify-between shadow-md">
                        <div className="flex">
                            <img src="images/1.jpg" alt="myimage" className="w-14 h-14 rounded-full object-cover" />
                            <div className="ml-3">
                                <div className="text-lg text-gray-900 font-bold">Marc Arison</div>
                                <div className="text-sm text-gray-400">Active now</div>
                            </div>
                        </div>
                        <div className="flex">
                            <div><i className="fas fa-phone-alt mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                            <div><i className="fas fa-video mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                            <div><i className="fas fa-ellipsis-v mx-3 bg-gray-200 p-2 rounded-full text-gray-400"></i></div>
                        </div>
                    </div>
                    <div className=" h-96 overflow-auto">
                        {
                            this.state.conversations.map( conversation => (
                                <div className="w-full">
                                    <div className="w-full flex items-end">
                                        { (!conversation.mine) ? <img src="images/1.jpg" alt="myImage" className="h-7 w-7 object-cover rounded-full mr-3"/> : '' }
                                        
                                        <div className={"flex w-full "+((conversation.mine) ? 'justify-end' : 'justify-start')}>
                                            <span className={"px-5 py-2 rounded-lg text-sm "+((conversation.mine) ? 'bg-gray-300 text-gray-900 ' : 'bg-green-700 text-gray-50' )+" "+((conversation.message.length > 50)? 'block w-2/3': '' )}>
                                                {conversation.message}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={"block text-xs text-gray-500 "+((conversation.mine) ? 'text-right mr-1' : 'text-left ml-10' )}>
                                        {this.formateDate(conversation.envoi)}
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full flex">
                        <form className="w-full flex items-center justify-between" onSubmit={this.handleSubmit}>
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
                <div className="h-full p-2">

                </div>
            </div>
            </connectedContext.Provider>
        )
    }
}

export default Connected

