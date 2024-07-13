import React from "react";
import "./projects.css";
import chat from "./images/chat.png";
import resume from "./images/resume.png";
import blog from "./images/blog.png";
import Dashboard from "./images/Dashboard.png";

function Projects() {
  return (
    <div className="Project">
      <div className="project">
        <div className="project-item">
          <div className="item">
            <div style={{ textAlign: "center" }}>
              <img src={chat} alt="" />
            </div>
            <a
              href="https://chat-with-anyone-7150e.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <ul>
              <li>
                Developed a simple chatting website. Users can create a room,
                and if the room number is the same for both users, they can
                chat.
              </li>
              <li>
                Created using React and Firebase. And also have a responsive
                design.
              </li>
            </ul>
          </div>
          <div className="item">
            <div style={{ textAlign: "center" }}>
              <img src={Dashboard} alt="" />
            </div>
            <a
              href="https://mern-dashboard-iel1.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <ul>
              <li>
                The dashboard displays data (fetched from the backend) in a
                graphical form to users. It is developed using the MERN stack
                and Chart.js.
              </li>
            </ul>
          </div>
        </div>
        <div className="project-item">
          <div className="item">
            <div style={{ textAlign: "center" }}>
              <img src={resume} alt="" />
            </div>
            <a
              href="https://resume-builder-rn31.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
            <ul>
              <li>Designed a resume maker website using ReactJS.</li>
              <li>
                Also includes a backend for user details It contains only one
                template that is made by using jsPDF technology.
              </li>
            </ul>
          </div>
          <div className="item">
            <img src={blog} alt="" />
            <p style={{ color: "purple" }}>Not Hosted</p>
            <ul>
              <li>
                This is a web application for creating and displaying blog
                posts, built using Express.js, EJS templating, and MongoDB for
                data storage.
              </li>
              <li>
                The app includes functionalities for viewing posts on the home
                page, composing new posts, viewing individual posts, and
                accessing static "About" and "Contact" pages.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
