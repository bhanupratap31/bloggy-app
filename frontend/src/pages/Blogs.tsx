import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"


export const Blogs = () => {
    return ( <div>
        <AppBar></AppBar>
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard 
                    authorName={"Bhanu Pratap Shukla"}
                    title={"How an ugly single page website makes $5000 a month with Affiliate Marketing"} 
                    content={"How an ugly single page website makes $5000 a month with Affiliate Marketing. How an ugly single page website makes $5000 a month with Affiliate Marketing."}
                    publishedDate={"2021-10-20"} 
                />

                <BlogCard 
                    authorName={"Bhanu Pratap Shukla"}
                    title={"How an ugly single page website makes $5000 a month with Affiliate Marketing"} 
                    content={"How an ugly single page website makes $5000 a month with Affiliate Marketing. How an ugly single page website makes $5000 a month with Affiliate Marketing."}
                    publishedDate={"2021-10-20"} 
                />

                <BlogCard 
                    authorName={"Bhanu Pratap Shukla"}
                    title={"How an ugly single page website makes $5000 a month with Affiliate Marketing"} 
                    content={"How an ugly single page website makes $5000 a month with Affiliate Marketing. How an ugly single page website makes $5000 a month with Affiliate Marketing."}
                    publishedDate={"2021-10-20"} 
                />
            </div>
        </div>
    </div>
    )
}