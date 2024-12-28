import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {SignupInput } from "@bhanu_pratap_shukla/bloggy-app-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
            name: "", 
            username: "", 
            password: ""
    })

    async function sendRequest () {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"? "signup": "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blog");
        }catch(e){
            alert("Invalid credentials while signing " + `${type==="signup"? "up": "in"}`)
        }
        
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account 
                        </div>
                        <div className="text-center text-slate-400">
                            {type==="signin" ? "Don't have an account?": "Already have an account?"} 
                             <Link className="pl-2 underline" to={type==="signin"? "/signup": "/signin"}>
                                {type==="signin" ? "Sign Up" : "Sign In"}
                            </Link>
                        </div>
                    </div>
                    <div>
                        {type==="signup"? <LabelledInput label = "Name" placeholder="Enter your name" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs, name: e.target.value
                            })
                        }}/> : null}

                        <LabelledInput label = "Username" placeholder="Enter your email" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs, username: e.target.value
                            })
                        }}/>

                        <LabelledInput label = "Password" type = {"password"} placeholder="Enter your password" onChange={(e) =>{
                            setPostInputs({
                                ...postInputs, password: e.target.value
                            })
                        }}/>

                        <button onClick={sendRequest} type="button" className="w-full mt-5 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">{type==="signup"? "Sign Up" : "Sign In"}</button>
                    
                    </div>
                </div> 
            </div>       
        </div>
    )
}

interface LabelledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({label, placeholder, onChange, type}: LabelledInputType){
    return <div>
        <div>
            <label className="block mb-2 text-sm text-black pt-5 font-semibold">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}