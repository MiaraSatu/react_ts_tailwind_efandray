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
    // messages: messageType[],
    // conversations: {id: number, message: string, envoi: string, mine: boolean}[],
    conversations: conversationType[],
    formateDate(date: string):string,
    formateString(contains: string, max: number): string
}

// interface connectedInterface{
//     //
//     lastIndex: number,
//     now: Date,
//     newMessage: string,
//     messages: messageType[],
//     conversations: {id: number, message: string, envoi: string, mine: boolean}[],
//     formateDate(date: string): string,
//     formateString(contains: string, max: number): string
// }

export default connectedInterface