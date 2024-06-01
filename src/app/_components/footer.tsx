"use client";
import { FaHeart } from "react-icons/fa";

export const Footer = () =>{
    return(
        <footer className="fixed bottom-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-2">
            <div className="flex justify-center align-center">
                Made with <FaHeart className="text-red-600 mx-1 my-1"/> by <a href="https://github.com/solo-daemon" className="text-yellow-400 pl-1">solo-daemon</a>
            </div>
        </footer>
    );
}