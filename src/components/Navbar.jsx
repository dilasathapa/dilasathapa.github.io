import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const onButtonClick = () => {
        window.open("/dilasa_thapa.pdf", "_blank");

        const link = document.createElement("a");
        link.href = "/dilasa_thapa.pdf";
        link.download = "dilasa_thapa.pdf";
        link.click();
      };



    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id='navbar-container' >
            <Container>
                <Nav.Link href='#home' id='name-title'>Home</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>

                </Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto'>

                        {/* <Nav.Link href='#' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                        <Nav.Link href='#about' className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} id='about-font' onClick={() => onUpdateActiveLink('about-parent')}>About</Nav.Link>
                        <Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} id='skills-font' onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href='#experience' className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} id='experience-font' onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>

                        <Nav.Link href='#myprojects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} id='projects-font' onClick={() => onUpdateActiveLink('project-parent')}>Projects</Nav.Link>
                        <Nav.Link className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} target='_blank' id='resume-font' onClick={onButtonClick}>Resume</Nav.Link>


                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://github.com/dilasathapa" > <p><FaGithub className='img' /></p></a>
                            <a href="https://www.linkedin.com/in/dilasa-thapa-a03461244/" > <p><FaLinkedinIn className='img' /></p> </a>
                            <a href="https://twitter.com/dilasa_thapa" > <p><FaXTwitter className='img' /></p></a>

                        </div>
                        <button className='vvd' id='connect-btn'
                            onClick={() => console.log('connect')}>
                            <span><Nav.Link id='lets' href='#form'>Let's Connect</Nav.Link></span>
                        </button>
                    </span>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}