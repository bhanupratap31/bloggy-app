import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"


export const FullBlog = ({blog}: {blog : Blog}) => {
    return <div>
            <AppBar/>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-4">
                        Posted on 01st jan 2025
                    </div>
                    <div className="pt-2">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4"> 
                    Author
                    <div className="flex w-full">
                        <div className="pr-4 flex flex-col justify-center"> 
                            <Avatar name={blog.author.name || "Anonymous"}></Avatar>
                        </div>
                        <div>
                            <div className="text-lg-2xl font-bold pt-2">
                                {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-400">
                                    Random catch phrase by the author as to how grab the audience's attention.
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}