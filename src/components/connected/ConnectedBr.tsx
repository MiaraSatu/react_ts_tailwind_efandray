import { Component } from "react";
import DefaultMessages from '../../data/DefaultMessages'

type messageType = {
    id: number, contains: string, createdAt: string, mine: boolean
}
type conversationType = {
    owner: string,
    messages: messageType[]
}

type connectedBrProps = {

}
type connectedBrStates = {
    idActualMessageFocused: number,
    conversations: conversationType[]
}

class ConnectedBr extends Component<connectedBrProps, connectedBrStates> {
    state = {
        idActualMessageFocused: 0,
        conversations: DefaultMessages,
    }

    handleFocusMessage = (name:string): void => {
        this.setState({idActualMessageFocused: this.state.conversations.findIndex( (conversation) => conversation.owner === name )})
    }

    renderX() {
        return (
            <>
                {this.state.conversations.map((conversation) => (
                    <div key={conversation.owner}>
                        <div className="text-md uppercase text-gray-700" onClick={()=> {this.handleFocusMessage(conversation.owner)}}>{conversation.owner}</div>
                        {/* <div className="ml-20">
                            {
                                conversation.messages.map((message)=> (
                                    <div>{message.contains}</div>
                                ) )
                            }
                        </div> */}
                    </div>
                ))}
                <div>
                    les messages:
                    {
                        this.state.conversations[this.state.idActualMessageFocused].messages.map((message)=> (
                            <div key={message.id}>{message.contains}</div>
                        ) )
                    }
                </div>
            </>
        )
    }
}

export default ConnectedBr