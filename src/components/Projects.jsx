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
          <h1>Projects</h1>
        </div>
        <div id="display">
          <div id="play" >
            <img src={pro1} alt="p1" id="video-links" />
            <p id="pro-titles1"> <i>Spotify Clone</i> </p>
            <div id="link">
              <p> <a href="https://github.com/ritikraj07/Project_Spotify.com"> <FaGithub className="icon" /></a></p>
              <p className="icon">|</p>
              <p> <a href="https://wondrous-stroopwafel-729c2a.netlify.app"> <FaExternalLinkAlt className="icon" /></a> </p>
            </div>

          </div>

          <div id="play" >
            <img src={pro2} alt="p1" id="video-links2" />
            <p id="pro-titles2"> <i>Myfitnesspal Clone</i> </p>
            <div id="link2">
              <p> <a href="https://github.com/dilasathapa/myfitnesspal-clone"><FaGithub className="icon" /></a> </p>
              <p className="icon">|</p>
              <p> <a href="https://cw-06-myfitnesspal.netlify.app/"> <FaExternalLinkAlt className="icon" /></a></p>
            </div>
          </div>
          <div id="play" >
            <img src={pro3} alt="p1" id="video-links3" />
            <p id="pro-titles3"> <i>Skinstore Clone</i> </p>
            <div id="link3">
              <p> <a href="https://github.com/AmanNinave/Masai-School-DNA"><FaGithub className="icon" /></a> </p>
              <p className="icon">|</p>
              <p> <a href="hhttps://63ff9841d9da6b18812e275c--wondrous-stroopwafel-729c2a.netlify.app/an-skinstore/homepage/"> <FaExternalLinkAlt className="icon" /></a></p>

            </div>
          </div>

        </div>
      </div>


    </>
  )
}

export default Projects;