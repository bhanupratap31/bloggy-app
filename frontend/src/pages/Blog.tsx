import { BlogSpinner } from "../components/BlogSpinner";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id||"1"
    });
    if(loading || !blog) {
        return <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <BlogSpinner/>
            </div>
        </div>  
    }
    return (
        <div>
            <FullBlog blog={blog}/>
        </div>
    )
}