import { Component } from "react";

// our usual types type
type message = {
    id: number,
    sender: string,
    contains: string,
    createdAt: string,
    seeNumber: number
}

type connectedProps = {
    // mes props
}
type connectedStates = {
    // mes states
    messages: message[],
}

class Connected extends Component<connectedProps, connectedStates> {

    formateContains = (contains: string): string => {
        if(contains.length > 12) {
            return contains.substring(0, 12)+"..."
        }
        return contains
    } 

    state = {
        messages: [
            {
                id: 1,
                sender: "Marc Arison",
                contains: "Hello frero! why you don't reply me?",
                createdAt: "2021-09-11 22:04:26",
                seeNumber: 0
            },
            {
                id: 2,
                sender: "Adams",
                contains: "Lorem ispum, mito pestenada ario nepteda",
                createdAt: "2021-09-11 22:06:05",
                seeNumber: 0
            },
            {
                id: 3,
                sender: "Allan",
                contains: "you're welcome my friend!",
                createdAt: "2021-09-11 22:16:18",
                seeNumber: 0
            },
        ]
    }
    render() {

        
        return (
            <div className="w-10/12 mx-auto h-5/6 my-auto bg-gray-200 rounded-3xl p-4 flex">
                {/* c est la barre de navigation */}
                <div className=" w-16 h-full bg-gray-600 flex flex-col justify-between rounded-xl p-7">
                    <div>
                        EFN
                    </div>
                    <div>opt</div>
                    <div>opt</div>
                    <div>opt</div>
                    <div>opt</div>
                </div>
                {/* la section qui contient les messages */}
                <div className=" w-52 h-full p-2">
                    {/* header de la section message */}
                    <div className="w-full flex justify-between">
                        <div>
                            Messages 5
                        </div>
                        <div>
                            s
                        </div>
                    </div>
                    {/* sous barre de navigation dans la section message */}
                    <div className="w-full flex justify-around text-sm">
                        <div>All</div>
                        <div>Conversations</div>
                        <div>Archived</div>
                    </div>
                    {/* le corp du section messages */}
                    <div className="w-full">
                        <div>Team</div>
                        <div className="w-full">
                            <div className="w-full flex">
                                <div className=" w-1/4">
                                    img
                                </div>
                                <div className=" w-3/4">
                                    contains
                                </div>
                            </div>
                        </div>
                        <div>Personal</div>
                        <div className="w-full flex flex-col">
                            {
                                this.state.messages.map( (message) => (
                                    <div className="w-full flex" key={message.id}>
                                        <div className=" w-1/4">
                                            img
                                        </div>
                                        <div className=" w-3/4">
                                            <div className="w-full ">
                                                <div className="text-sm text-gray-800 font-bold">{message.sender}</div>
                                                <div className="text-xs text-gray-600">{message.createdAt}</div>
                                            </div>
                                            <div>
                                                {this.formateContains(message.contains)}
                                            </div>
                                        </div>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Connected