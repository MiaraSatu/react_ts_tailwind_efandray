// our usual types type
type messageType = {
    id: number,
    sender: string,
    contains: string,
    createdAt: string,
}

interface connectedInterface{
    //
    now: Date,
    newMessage: string,
    messages: messageType[],
    conversations: {id: number, message: string, envoi: string, mine: boolean}[],
    formateDate(date: string): string,
    formateString(contains: string, max: number): string
}

export default connectedInterface