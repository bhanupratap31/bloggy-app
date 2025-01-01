import { AppBar } from "./AppBar"


export const Publish = () => {
    return <div>
            <AppBar></AppBar>
            <div className="flex justify-center w-full"> 
                    <div className="max-w-screen-lg w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Title</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Title"></input>
                    </div>  
            </div>
            <TextEditor></TextEditor>
    </div>
}

function TextEditor(){
    return <form> 
        <div className="w-full mb-4">
            <div className="flex items-center justify-between border">  
                <div className="py-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." required></textarea>
                </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">Publish Post</button>
        </div>
</form>
}
