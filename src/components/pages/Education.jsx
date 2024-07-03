import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@mui/icons-material/School';
import { Heading } from '../common/Heading';
export const Education = () => {
    return (
     
        <div style={{margin:1 + 'rem'}}>
            <Heading title="Education" />
            <VerticalTimeline >
                <VerticalTimelineElement 
                    iconStyle={{ background: "silver", color: "black" }}
                    contentStyle={{background:"#212222"}}
                    icon={<SchoolIcon/>}
                    date="2003 - 2006"        
                   contentArrowStyle={{color:"#212222"}}
                >
                  
                    <p className="timeline-item" >Bachelor of Computer Application (BCA)</p>
                    <p className="timeline-item" >The Maharaja Sayajirao University of Baroda</p>
    
                 
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    iconStyle={{ background: "silver", color: "black" }}
                    contentStyle={{background:"#212222"}}
                    icon={<SchoolIcon/>}
                    date="2006 - 2009"        
                   contentArrowStyle={{color:"#212222"}}
                >
                  
                    <p className="timeline-item" >Master of Computer Application (MCA)</p>
                    <p className="timeline-item" >The Maharaja Sayajirao University of Baroda</p>
    
                 
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
