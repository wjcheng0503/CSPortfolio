import React from "react";

function SingleProject({title, projectType, skills, descriptions}) {
    var len = skills.length;
    var count = 0;
    return (
        <div className="mt-16 w-full h-fit p-5
                                    bg-orange-100
                                    rounded-lg border-solid border-4 border-orange-700
                                    relative">
                        <h1 className=" inline
                                        font-bold sm:text-2xl text-1.5xl font-lg
                                        text-gray-100
                                        p-2 px-4 bg-orange-700 rounded
                                        absolute bottom-22/24 right-4/6">
                            {title}
                        </h1>
                        <h2 className="italic">{projectType}</h2>
                        <h2 className="italic">
                            Skills Used:{skills.map((skill) => {if (count < len-1) {
                                                                    count++;
                                                                    return <span> {skill},</span>;        
                                                                } else {
                                                                    return <span> {skill}</span>;
                                                                }
                                                                })}
                        </h2>
                        <ul className="list-disc ml-5 mt-2">
                            {descriptions.map((description) => (<li>{description}</li>))}
                        </ul>
                    </div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="h-full flex flex-col px-10 py-5 justify-items-start">
            <div className="h-full flex-row">
                <h1 className="font-bold italic sm:text-4xl text-3xl font-xl">
                    Projects
                </h1>
                <div className="h-full flex flex-col justify-evenly">
                    <SingleProject  title={"Wordle-Like Game Site"} 
                                    projectType={"Web Application"} 
                                    skills={["ReactJS", "ASP.NET", "MySQL", "Jest", "HTML5", "JavaScript", "C#"]}
                                    descriptions={[ "Developed a Wordle-like game site where players can guess the names of Pokemon from its titular series.",
                                                    "Utilized a database to store user data (such as wins and total attempts), as well as Pokemon information from which hints are given.",
                                                    "Employed ReactJS for frontend, and ASP.NET for the backend, establishing a cohesive MVC architecture.",
                                                    "Conducted extensive unit- and integration-testing via the Jest framework to ensure the functionality and stability of the game."]}/>
                </div>
                <div className="h-full flex flex-col justify-evenly">
                    <SingleProject  title={"Endless Runner Android Game"} 
                                    projectType={"Unity Mobile Game"} 
                                    skills={["Figma", "Unity", "C#", "Git", "Version Controls", "Firebase", "Android", "iOS"]}
                                    descriptions={[ "Collaborated with a teammate to build a platformer game where players run endlessly while dodging incoming obstacles.",
                                                    "Followed a proper software development cycle, from storyboarding, use-case planning to the implementaion and testing of the final game.",
                                                    "Leveraged the Unity engine to compute the states and logic for the game, from player movements to procedural-generation of traps and walls.",
                                                    "Deployed the game on Android and iOS to create a multi-platform player base.",
                                                    "Stored player data in the cloud via Firebase, allowing for major game features such as user login, leaderboards, and in-game purchases."]}/>
                </div>
            </div>
        </section>
    );
}