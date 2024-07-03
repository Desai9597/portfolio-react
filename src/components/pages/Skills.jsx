import React from 'react';
import { Heading } from '../common/Heading';
import { skills } from "../data/data";

export const Skills = () => {
    return (
        <>
            <Heading title="Skills" />
   
            <ul className="skills">
                {skills.map((skill) => (
                    <li className="box" data-aos="flip-left" key={skill.id}>
                        <article>
                            <div className="text" data-aos="fade-up">
                                <label>{skill.category}</label>
                            </div>

                            {skill.values.map((tag) => (
                                <React.Fragment key={tag.id}>
                                <div className="skill-entry" >
                                  
                                    <p className="project-tags" >
                                        {tag.name}
                                    </p>
                                    <div className="progressBar">
                                    <div className="skillProgress" style={{ width: tag.percentage}} />
                                </div>
                                    <p className="percentValue">
                                        {tag.percentage}
                                    </p>
                                </div>
                                
                                </React.Fragment>
                            ))}
                        </article>
                    </li>
                ))}
            </ul>

        </>

    )
}
