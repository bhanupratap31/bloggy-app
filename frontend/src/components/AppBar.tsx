import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom";


export const AppBar = () => {
    return ( <div className="border-b flex justify-between px-10 py-2">
        <Link to = {'/blogs'} className="mt-2 flex flex-col justify center text-xl font-black cursor-pointer"> 
           Bloggy
        </Link>
        <div className="flex">
            <Link to={'/publish'}>
                <button type="button" className="resize mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-extrasmall rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">New</button>
            </Link>
            <div className="mt-1">
                <Avatar name="Bhanu"></Avatar>
            </div>
        </div>
    </div>
    )
}