import React from 'react'
import { Heading } from '../common/Heading'
import DownloadIcon from '@mui/icons-material/Download';
import PreviewIcon from '@mui/icons-material/Preview';
import { achievements } from '../data/data';
export const Achievements = () => {
    return (
        <> <Heading title="Achievements" />

          

                <ul className="achievements">
                    {achievements.map((achievement) => (
                        <li className="box" data-aos="flip-left" key={achievement.id}>
                            <article>
                                <div className="box-title" data-aos="fade-up">
                                    <label>{achievement.category}</label>
                                </div>
                                {achievement.values.map((entry) => (
                                    <React.Fragment key={entry.id}>
                                        <div className="achievement-entry">
                                            <div className="leftSide">
                                                <div className="trophy">{entry.icon}</div>
                                                <div className="text">{entry.name}
                                                </div>
                                            </div>

                                         <div>
                                                <p className="download-actions">
                                                    <button className="download-button" onClick={() => window.open(`${entry.downloadLink}`, "_blank")}>
                                                        <PreviewIcon />
                                                    </button>
                                                </p>
                                            </div>
                                           

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
