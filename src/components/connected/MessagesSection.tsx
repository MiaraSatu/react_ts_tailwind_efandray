import { FunctionComponent } from "react";
import connectedContext from "../../contexts/connected-context";

const MessagesSection: FunctionComponent<{}> = () => {

    return (
        <connectedContext.Consumer>
            {
                (value) => (
                    <div className=" w-72 h-full p-2">
                        {/* header de la section message */}
                        <div className="w-full flex justify-between">
                            <div className="">
                                <span className="text-md font-bold text-black font-sans">Messages</span>
                                <span className="text-xs text-gray-50 bg-red-600 px-1 rounded-full ml-2">5</span>
                            </div>
                            <div className="bg-gray-200 rounded-full w-6 h-6 text-sm text-gray-500 py-1 text-center">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        {/* sous barre de navigation dans la section message */}
                        <div className="w-full flex justify-between text-md mt-3">
                            <div className="text-blue-700 border-b-2 border-blue-700 pb-1">All Conversations</div>
                            <div className="text-gray-900">Archived</div>
                        </div>
                        {/* le corp du section messages */}
                        <div className="w-full mt-5">
                            <div className="text-gray-500 uppercase text-xs font-semibold">Active conversations</div>
                            <div className="w-full flex flex-col pt-2">
                                {
                                    value?.messages.map( (message) => (
                                        <div className="w-full flex my-2" key={message.id}>
                                            <div className=" w-1/5">
                                                <img src={"images/"+message.id+".jpg"} alt="myImage" className="w-10 h-10 rounded-full object-cover" />
                                            </div>
                                            <div className=" w-4/5">
                                                <div className="w-full flex items-center justify-between">
                                                    <div className="text-sm text-gray-900 font-bold w-3/6 ">{message.sender}</div>
                                                    <div className="text-xs text-gray-500 text-right">{value?.formateDate(message.createdAt)}</div>
                                                </div>
                                                <div className="w-full flex justify-between items-center">
                                                    <div className=" w-11/12 text-xs text-black">
                                                        {value.formateString(message.contains, 30)}
                                                    </div>
                                                    <div className="text-xs text-gray-50 bg-red-600 px-1 rounded-full ml-2">
                                                        5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) )
                                }
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <div className="text-gray-500 uppercase text-xs font-semibold">Archived conversations.0</div>
                        </div>
                    </div>    
                )
            }
        </connectedContext.Consumer>
    )
}

export default MessagesSection