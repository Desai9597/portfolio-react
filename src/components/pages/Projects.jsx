import React from 'react';
import { Heading } from "../common/Heading";
import { projects } from "../data/data";

export const Projects = () => {

    return (
        <>
            <Heading title="Projects" />
      
            <ul className="projects">

                {projects.map((project) => (
                    <li className="box" data-aos="flip-left" key={project.id}>
                        <article>
                       
                            <div className="projectImg" data-aos="fade-up">
                            <img src={project.projectImage} alt="Project image" data-aos='fade-down' />
                            </div>
                        
                        
                        <div className="text">
                            <label>
                                {project.title}
                            </label>
                            <p data-aos='fade-up-right'>{project.desc}</p>
                        </div>

                        <p className="project-actions">
                            <button className="project-button" onClick={() => window.open(project.projectLink, '_blank')} >View Project</button>
                            <button className="project-button" onClick={() => window.open(project.githubLink, '_blank')}>Github Link</button>
                        </p>

                        {project.tags.map((tag) => (
                            <p className="project-tags" key={tag.tagId}>
                                {tag.tagName}
                            </p>
                        ))}
                    </article>
                    </li>
                ))}

            </ul>

        </>
    )
}
