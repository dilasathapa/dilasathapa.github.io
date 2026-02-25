import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pro1 from "./../images/videos/spotifyclonecom.gif";
import pro2 from "./../images/videos/gif2.gif"
import pro3 from "./../images/videos/gif3.gif"


const Projects = () => {
  return (
    <>
      <div id="myprojects">
        <div id="projects">
          <h1>PROJECTS</h1>
        </div>
        <div id="display">
          <div className="play" >
            <div className="project-photos">

              <img src="https://snipboard.io/KhOtc8.jpg" alt="p1" className="photo-links" />
            </div>
            <div className="description">
              <h3>The Nest Homestay</h3>
              <p>Currently developing a full-stack room booking web application using React.js, Node.js, Express.js, MongoDB, Firebase, and Cloudinary; built a functional prototype featuring room listings, booking request forms, and dynamic availability.</p>
              <p>Designed responsive frontend components with React.js and CSS/SCSS, ensuring smooth navigation across desktop and mobile devices.</p>
              <p>Implementing RESTful APIs and database schema for bookings, user interactions, and admin management while collaborating with the client for feedback and iterative improvements.</p>
              <div className="icon-link">
                {/* <p> <a href="https://github.com/ritikraj07/Project_Spotify.com"> <FaGithub className="icon" /></a></p>
                <p className="icon">|</p> */}
                <p> <a target="_blank" href="https://nesthomestay-8e7e1.web.app/"> <FaExternalLinkAlt className="icon" /></a> </p>
              </div>
            </div>

          </div>

          <div className="play" >
            
            <div className="description">
              <h3>Myfitnesspal Clone</h3>
              <p>It allows users to track calories, monitor progress toward weight-management goals, and gain support from an online community.</p>
              <p>built the home page and profile page of the user, worked on the navbar and responsiveness of the site</p>
              <div className="icon-link">
                <p> <a target="_blank" href="https://github.com/dilasathapa/myfitnesspal-clone"> <FaGithub className="icon" /></a></p>
                <p className="icon">|</p>
                <p> <a target="_blank" href="https://myfitnesspal-cloned.netlify.app/"> <FaExternalLinkAlt className="icon" /></a> </p>
              </div>
            </div>
            <div className="project-photos">

              <img src="https://snipboard.io/qMWbnd.jpg" alt="p2" className="photo-links" />
            </div>
            

          </div>
          <div className="play" >
            <div className="project-photos">

              <img src="https://snipboard.io/iW3mRx.jpg" alt="p3" className="photo-links" />
            </div>
            <div className="description">
              <h3>Fakesters</h3>
              <p>Fakesters is an anonymous fake chatting app where users can freely talk to strangers without revealing their real identity. It provides a safe and fun space to share thoughts, vent feelings, or simply enjoy random conversations.</p>
             <p>Completed core real-time chat functionality enabling dynamic conversations between random users.</p>
             <p>Currently working on additional features like user account management, random user matching, chat history, and theme customization.</p>
              <div className="icon-link">
                <p> <a target="_blank" href="https://github.com/dilasathapa/Fakesters"> <FaGithub className="icon" /></a></p>
                <p className="icon">|</p>
                <p> <a target="_blank" href="https://fakesters.netlify.app/"> <FaExternalLinkAlt className="icon" /></a> </p>
              </div>
            </div>
            
            

          </div>

        </div>
      </div>


    </>
  )
}

export default Projects;