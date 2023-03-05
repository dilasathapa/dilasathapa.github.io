import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";


export const Footer = () => {
    return (
        <>
            <div id="footer-parent">
                <div id="footer">
                    <div id="icons">
                        <a href="https://github.com/dilasathapa" id="ref"><FaGithub className="footer-icons" /></a>
                        <a href="https://www.linkedin.com/in/dilasa-thapa-a03461244/" id="ref"><FaLinkedinIn className="footer-icons" /> </a>
                        <a href="https://twitter.com/dilasa_thapa" id="ref"><FaTwitter className="footer-icons" /></a>
                        
                    </div>
                    <br />
                    <h3>Made By <span><AiFillHeart/> </span> Dilasa Thapa</h3>

                </div>
            </div>
        </>
    )
}