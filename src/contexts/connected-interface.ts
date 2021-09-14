import {MouseEvent} from "react"

// our usual types type
type messageType = {
    id: number, contains: string, createdAt: string, mine: boolean
}
type conversationType = {
    owner: string,
    messages: messageType[]
}

interface connectedInterface{
    // mes states
    lastIndex: number,
    now: Date,
    newMessage: string,
    ownerFocused: string,
    isFirstSend: boolean,
    conversations: conversationType[],
    formateDate(date: string):string,
    formateString(contains: string, max: number): string,
    handleChangeFocusMessage(e: MouseEvent<HTMLDivElement>):void,
}

export default connectedInterface