import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../services/firebaseConfig";

export const ContactMePage = () => {

    const [data, setData] = useState({ name: '', email: '', subject: '', textSend: '' });


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data);
        const productsCollection = collection(db, "DataContactme");
        addDoc(productsCollection, data)
        setData({ name: '', email: '', subject: '', textSend: '' });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }


    return (
        <div id="contact" className="flex flex-col items-center justify-center bg-contactme bg-cover bg-center h-max w-full">
            <div className="text-5xl font-extrabold text-center md:mb-[10px]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Contact me
                </span>
            </div>
            <div className="bg-gray-900 w-[90%] md:w-1/2 shadow rounded p-8 m-4">
                <form>
                    <div className="md:flex items-center mt-12">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="font-semibold leading-none text-gray-300">Name</label>
                            <input name="name" value={data.name} onChange={handleInputChange} required type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="font-semibold leading-none text-gray-300">Phone</label>
                            <input name="email" value={data.email} onChange={handleInputChange} required type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                            <label className="font-semibold leading-none text-gray-300">Subject</label>
                            <input name="subject" value={data.subject} onChange={handleInputChange} required type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                        </div>

                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="font-semibold leading-none text-gray-300">Message</label>
                            <textarea name="textSend" value={data.textSend} onChange={handleInputChange} required type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button onClick={handleSubmit} className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                            Send message
                        </button>
                    </div>
                </form>
            </div>
            <div className="bg-blue-700 rounded">
                <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-white">© 2024 Storm Shadow. All rights reserved. 🐱‍👤</p>
            </div>
        </div>
    )
}
