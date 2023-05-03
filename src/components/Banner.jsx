import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { Nav } from 'react-bootstrap';
import dthapa from "./../images/myimage/dthapa.jpg"





export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Web Developer", "Full Stack Web Developer", "Full Stack Web Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker)
        };
    }, [text]);


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    const onButtonClick = () => {
        fetch("Dilasa_Thapa_CV.pdf").then((response) => {
          response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Dilasa_Thapa_CV.pdf";
            alink.click();
          });
        });
      };



    return (
        <section className="banner" id="home" >
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span>Welcome to my Portfolio</span>
                                    <h1>Hi! I'm <i style={{color:"rgb(17,139,150)"}}>Dilasa Thapa</i>  <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Full Stack Web Developer",  "Full Stack Web Developer", "Full Stack Web Developer",]'><span className="wrap">{text}</span></span></h1>
                                    <p>My goal is to leverage my technical expertise, creativity, and problem-solving skills to build innovative solutions that meet the needs of businesses and individuals. I have experience working with a variety of programming languages, frameworks, and technologies, and I am always eager to learn and grow as a developer. Thank you for taking the time to explore my portfolio, and I look forward to connecting with you.</p>
                                    <button onClick={onButtonClick}>Download CV <Nav.Link href="#form-parent"> <ArrowRightCircle size={25} /></Nav.Link></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img className="myimage" src={dthapa} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>

                </Row>
            </Container>
        </section>
    )
}
