import { BlogCard } from "../components/BlogCard"


export const Blogs = () => {
    return (
        <div>
            <BlogCard 
                authorName={"John Doe"}
                title={"My first blog"} 
                content={"This is my first blog. I am so excited to share my thoughts with you."}
                publishedDate={"2021-10-20"} 
            />
        </div>
    )
}