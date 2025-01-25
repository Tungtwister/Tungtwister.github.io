import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    return (
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(26, 77, 46)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(26, 77, 46)' }}
              dateClassName="home-timeline-date-right"
              date="2023 - present"
              iconStyle={{ background: 'rgb(26, 77, 46)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Data Science & Systems Engineer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Caltrol - Irvine, CA
              </h4>
              <p>
                Data Science, Machine Learning, Systems Engineering, Data Visualization
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2023 - 2023"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Associate Machine Learning Developer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                AltaML - Calgary, AB, Canada
              </h4>
              <p>
                Machine Learning, Data Science, Predictive Maintenance, Anomaly Detection
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-right"
              date="2020 - 2023"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Associate Systems Engineer, MES
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Caltrol - Irvine, CA
              </h4>
              <p>
                Manufacturing Execution Systems, GMP Compliance, System Integration
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2020 - 2021"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Curriculum Developer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Intellibricks - Remote
              </h4>
              <p>
                Curriculum Development, EdTech, STEM Education
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-right"
              date="2020 - 2020"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Coding Instructor
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                CodeREV Kids - Huntington Beach, CA
              </h4>
              <p>
                Coding Instruction, Game Design, Classroom Management
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2018 - 2018"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Software Engineer Intern
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                UCR's Brain Game Center - Riverside, CA
              </h4>
              <p>
                Embedded Systems, C++, Software Development
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            />
          </VerticalTimeline>
    );
}

export default Timeline;