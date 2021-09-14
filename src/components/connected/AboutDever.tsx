import { FunctionComponent } from "react";

const AboutDever: FunctionComponent = () => {
    return (
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
    )
}

export default AboutDever;