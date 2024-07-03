import React from 'react'
import { home } from "../data/data.js";
import Typewriter from "typewriter-effect";
import {Header} from "../common/Header.jsx"
export const Hero = () => {
    return (
        <>
            <section className="hero">

                <div className='heroContainer flex'>
                    {home.map((content, i) => (
                        <React.Fragment key={content.id}>
                           
                                <div className="left" data-aos='fade-down-right'>
                                    <img className="myPic" src={content.pic} alt="myPic" />
                                </div>
                                <div className="right heroContent" data-aos='fade-down-left'>
                                    <h3 className="hello">
                                        {content.text}
                                    </h3>
                                    <h1>
                                        <Typewriter
                                            options={{
                                                strings: [`${content.name}`, `${content.post}`, `${content.special}`],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                    <p data-aos="fade-left">
                                        {content.desc}
                                    </p>
                                </div>
                  

                        </React.Fragment>
                    ))}
                </div>

            </section>
        </>
    )
}
