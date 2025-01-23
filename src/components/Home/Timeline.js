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
              date="2011 - present"
              iconStyle={{ background: 'rgb(26, 77, 46)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Data Science Engineer
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2010 - 2011"
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            >
              <h3 
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                  Systems Engineer, MES
              </h3>
              <h4 
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                Irvine, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-right"
              date="2008 - 2010"
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
                Irvine, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2006 - 2008"
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
                Irvine, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-right"
              date="2006 - 2008"
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
                Remote
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 239, 230)', color: '#000' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(245, 239, 230)' }}
              dateClassName="home-timeline-date-left"
              date="2006 - 2008"
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
                Riverside, CA
              </h4>
              <p>
                User Experience, Visual Design
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: 'rgb(79, 111, 82)', color: '#fff' }}
            />
          </VerticalTimeline>
    );
}

export default Timeline;