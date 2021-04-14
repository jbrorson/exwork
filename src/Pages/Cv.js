import React from 'react';
import Title from '../Components/Title';
import { ReactComponent as WorkIcon } from "../icons/work.svg";
import { ReactComponent as EduIcon } from "../icons/education.svg";


import timelineElements from '../Components/timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

function Cv() {
  let workIconStyles = { background: "#06D6A0" };
  let eduIconStyles = { background: "#f9c74f" };

  return (
    <div className="Timeline">
      <Title title={"Timelime"} span={"Timeline"} />
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : eduIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <EduIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Cv;
