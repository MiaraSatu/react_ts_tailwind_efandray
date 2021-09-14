import {MouseEvent} from "react"

// our usual types type
interface discoInterface{
    pageActu: string,
    handleChangePage(e: MouseEvent<HTMLDivElement>, destination: string): void
}

export default discoInterface