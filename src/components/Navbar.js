import React from "react";

export default function Navbar() {
    return (
        <nav id="navbar" className="flex bg-orangeHappy-200 py-8 justify-evenly h-1/8 w-full items-center text-center">
            {[
                ['Projects', '/projects'],
                ['Skills', '/skills'],
                ['Education', '/education'],
                ['Contact', '/contact'],
            ].map(([title, url]) => (
                <a  href={url} 
                    className="inline-block text-white bg-orange-700 border-0 py-2 w-1/5 focus:outline-none hover:bg-orange-900 hover:text-white rounded text-lg">
                    {title}
                </a>
            ))}
        </nav>
    );
}