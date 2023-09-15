import React from "react";

export default function About() {
    return (
        <section id="about" className="h-fit flex flex-col px-10 pt-10 pb-5 justify-items-start">
            <div className="flex-col">
                <h1 className="font-bold italic text-orange-900 sm:text-4xl text-3xl font-xl">
                    Adventure begins with the first step into the unknown...
                </h1>
                {['Hi, my name is Wen-Jui, but feel free to call me Ray!',
                  "I'm a software developer from Taiwan, specializing in Full-Stack Web Development and Game Development. " + 
                  "When I'm not coding, you can find me drawing up new character designs, making terrible character impressions, " + 
                  "or playing video games!",
                  "Keep reading to check out what I've made, what I can do, how I got here, and how you can reach out to me!",
                ].map((text) => (
                    <p className="mt-5 sm:text-xl text-lg font-m">
                        {text}
                    </p>
                ))}
            </div>
        </section>
      );
}