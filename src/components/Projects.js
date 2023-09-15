import React from "react";

export default function Projects() {
    return (
        <section id="projects" className="h-full flex flex-col px-10 py-5 justify-items-start">
            <div className="h-full flex-row">
                <h1 className="font-bold italic sm:text-4xl text-3xl font-xl">
                    Projects
                </h1>
                <div className="h-full flex flex-col justify-evenly">
                    <div className="mt-16 w-full h-fit px-5 pt-8 pb-5
                                    bg-orange-100
                                    rounded-lg border-solid border-4 border-orange-700
                                    relative">
                        <h1 className=" font-bold inline-block 
                                        sm:text-2xl text-1.5xl font-lg
                                        text-gray-100
                                        p-2 px-4 bg-orange-700 rounded
                                        absolute bottom-22/24">
                            Wordle-Like Game Site
                        </h1>
                        <h2 className="italic">Web Application</h2>
                        <h2 className="italic">Skills Used: ReactJS, ASP.NET, MySQL, Jest, HTML5, JavaScript, C#</h2>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Developed a Wordle-like game site where players can guess the names of Pokemon from its titular series.</li>
                            <li>Utilized a database to store user data (such as wins and total attempts), as well as Pokemon information from which hints are given.</li>
                            <li>Employed ReactJS for frontend, and ASP.NET for the backend, establishing a cohesive MVC architecture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}