import { useEffect, useRef, useState } from "react";

const About = () => {
    const textRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;

            const rect = textRef.current.getBoundingClientRect();
            const middle = window.innerHeight / 1.5;

            if (rect.top < middle) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            <div id="about">
                <h1 ref={textRef}
                    className={isActive ? "text active" : "text"}
                >ABOUT ME</h1>
                <div id="achild-parent">
                    <p>
                        I am a Full Stack Developer with experience building scalable web applications using the MERN stack. My journey includes working as a Technical Mentor, 
                        where I helped students strengthen their problem-solving and development skills, and as a Freelance Developer, 
                        where I’ve delivered end-to-end web solutions from concept to deployment.   
                    </p>
                    <p>

                        I enjoy building clean, responsive, and user-focused applications that solve real-world problems. 
                        I am currently seeking opportunities in a development role where I can contribute to impactful products, 
                        collaborate with strong teams, and continue growing as a software engineer.                        
                    </p>
                    <p>

                        Outside of web development, I have a diverse range of interests and hobbies
                        that keep me engaged and inspired. As a sports enthusiast,
                        I am an avid table tennis player and have participated and won in
                        several competitions at the district and state level. In my free time,
                        I also enjoy photography. Reading is another passion of mine, When I'm not reading,
                        you can often find me singing, dancing, or learning new things,
                        as I enjoy challenging myself and exploring new opportunities
                        for personal growth.
                    </p>

                    
                </div>
            </div>
        </>
    )
}

export default About;