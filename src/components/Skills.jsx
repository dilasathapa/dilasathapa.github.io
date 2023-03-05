import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaNodeJs } from "react-icons/fa";
import reduxicon from "./../images/lang-img/redux.ico"
import cssicon from "./../images/lang-img/css3.ico"
import htmlicon from "./../images/lang-img/html.ico"
import jsicon from "./../images/lang-img/javascript.ico"
import reacticon from "./../images/lang-img/react.ico"
import expressicon from "./../images/lang-img/express.png"
import mongodbicon from "./../images/lang-img/mongodb.ico"
import javaicon from "./../images/lang-img/java.ico"




export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 320 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 320, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" id='myskills'>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I specialize in both front-end and back-end development, with a focus on creating dynamic, user-friendly web applications. I have experience working on various projects, including e-commerce websites, social media platforms, and other web applications.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
                            <div className="item">
                                <img src={htmlicon} alt="Image-name1" style={{height:"100px", width:"100px"}}/>
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={cssicon} alt="Image-name2" style={{height:"100px", width:"100px"}}/>
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={jsicon} alt="Image-name3" style={{height:"100px", width:"100px"}}/>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <FaNodeJs style={{fontSize:"100px", color:"green"}}/>
                                <h5 style={{paddingTop:"12px"}}>Node</h5>
                            </div>
                            <div className="item">
                                <img src={reacticon} alt="Image-name4" style={{height:"100px", width:"100px"}} />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={reduxicon} alt="Image-name5" style={{height:"100px", width:"100px"}}/>                            
                                <h5>Redux</h5>
                            </div>

                            <div className="item">
                                <img src={expressicon} alt="Image-name6" style={{height:"100px", width:"100px"}}/>
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={mongodbicon} alt="Image-name7" style={{height:"100px", width:"100px"}}/>                            
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={javaicon} alt="Image-name8" style={{height:"100px", width:"100px"}}/>                            
                                <h5>JAVA</h5>
                            </div>
                           
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={portfooter} alt="Image" /> */}
    </section>
  )
}