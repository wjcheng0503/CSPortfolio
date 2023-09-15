import React from "react";
import ProgressLine from "./ProgressBar";

export default function Header() {
    const hpBarVisual = [{percentage: Math.floor(Math.random() * 100).toString() + "%", color: "#ea580c"}];
    const mpBarVisual = [{percentage: Math.floor(Math.random() * 100).toString() + "%", color: "#1e40af"}];
    return (
        <section id="header" className="w-1/4 flex flex-col items-center bg-orange-700">
                <div className="m-5">
                    <h1 className="sm:text-.5xl text-3xl font-medium text-white">
                        Wen-Jui Cheng
                    </h1>
                    <h2 className="flex flex-row sm:text-.5xl text-.5xl font-medium text-gray-200">
                        <div className="pr-1 border-r-2">
                            Software Engineer
                        </div>
                        <div className="pl-1">
                            Digital Artist
                        </div>
                    </h2>
                </div>
                <div className="mx-5 pb-5 lg:w-7/8 md:w-1/2 w-6/8 
                                flex flex-col items-center
                                bg-orangeHappy-100 rounded-lg">
                    <div  className="mt-5 lg:w-5/6 md:w-1/2 w-4/6
                                     lg:h-5/6 md:h-1/2 h-4/6
                                    rounded-lg border-solid border-4 border-orange-900">
                        <img className="object-cover object-center
                                        rounded"
                            alt="myself"
                            src={require('../img/raine-photo.png')}
                        />
                    </div>
                    
                    <div className="text-lg font-medium lg:w-5/6 md:w-1/2 w-4/6
                                    flex flex-col justify-between">
                        <div className="w-full flex flex-row justify-between">
                            <h2 className="">
                                Lv. 53
                            </h2>
                            <h2 className="italic">
                                Peppy Adventurer
                            </h2>
                        </div>

                        <ProgressLine 
                            label={"HP"}
                            backgroundColor="white"
                            visualParts={hpBarVisual}
                        />
                        <ProgressLine
                            label={"MP"}
                            backgroundColor="white"
                            visualParts={mpBarVisual}
                        />
                        <div className="flex flex-col justify-evenly">
                            <h3 className="self-center">Hobbies</h3>
                            {[
                                ['Drawing', '7'],
                                ['Gaming', '8'],
                                ['Voice Acting', '5'],
                                ['Streaming', '3'],
                            ].map(([hobby, mp]) => (
                                <div className="flex flex-row justify-between">
                                    <h2>{hobby}</h2>
                                    <h2>{mp} MP</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-5 w-6/8 h-1/8 flex flex-row items-center justify-evenly">
                    <a  className="h-fit"
                        href="https://www.linkedin.com/in/wenjui-cheng/"
                        target="_blank">
                        <img    className="h-16"
                                alt="linkedin"
                                src={require('../img/linkedin-icon.png')}
                        />
                    </a>
                    <a  href="https://github.com/wjcheng0503"
                        target="_blank">
                        <img    className="h-16"
                                alt="github"
                                src={require('../img/github-icon.png')}
                        />
                    </a>
                    <a  href="wenraycheng@gmail.com">
                        <img    className="h-16"
                                alt="email"
                                src={require('../img/mail-icon.png')}
                        />
                    </a>
                </div>
        </section>
    );
}