
import { useRouteError } from "react-router-dom"
const Error=()=>{


    const error=useRouteError()
    return <h1>Opps Error occured</h1>
}

export default Error