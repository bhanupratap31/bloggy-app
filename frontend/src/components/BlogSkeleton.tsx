

export const BlogSkeleton = () => {
    return <div>
            <div role="status" className="animate-pulse">
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className ="flex">
                <div className="flex justify-center flex-col">
                    <div className="h-4 w-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                <div className="pl-2 font-thin text-slate-500">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
            </div>
            <div className="pt-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-600 font-thin text-base">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="text-slate-400 font-thin text-sm pt-1">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div className="h-1 w-full">
            </div>
        </div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}