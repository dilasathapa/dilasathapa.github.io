import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    start: "Jun 2025",
    end: "Present",
    role: "Full Stack Developer",
    description: "Working independently on designing and developing end-to-end web applications using modern JavaScript technologies. I handle the complete development lifecycle — from requirement gathering and system design to frontend implementation, backend API development, database integration, and deployment — ensuring scalable, responsive, and user-focused solutions."
  },
  {
    start: "Aug 2023",
    end: "Apr 2025",
    role: "Technical Mentor",
    company: "KALVIUM",
    description: "Delivered hands-on, practical training to equip students with comprehensive technical knowledge, preparing them effectively for internships and job opportunities. Provided personalized mentorship following the Kalvium framework, guiding students through technical challenges and strengthening their problem-solving and development skills. Supported students post-internship placement by helping them refine and align their technical expertise with company-specific requirements and real-world expectations."
  }, 
  {
    start: "May 2023",
    end: "Jul 2023",
    role: "Technical Mentor Intern",
    company: "KALVIUM",
    description: "Actively supported students in securing internship opportunities by strengthening their technical foundations and interview readiness. I conducted structured bootcamps focused on full-stack development, data structures, and problem-solving to prepare them for real-world industry requirements."
  }
];

const Experience=()=> {
    const refs = useRef([]);
    const textRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  

    useEffect(() => {
        const handleScroll = () => {
            if (!textRef.current) return;
            const trigger = window.innerHeight * 0.85;
            const middle = window.innerHeight / 1.5;
            const rectt = textRef.current.getBoundingClientRect();
            
            if (rectt.top < middle) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
            
            refs.current.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < trigger) {
                    el.classList.add("show");
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <section className="experience">
        <h1 ref={textRef} 
        className={isActive ? "text active" : "text"}
        >EXPERIENCE</h1>
      <div className="timeline"></div>

      {experiences.map((exp, index) => (
        <div
          key={index}
          ref={(el) => (refs.current[index] = el)}
          className="experience-row"
        >
          <div className="year">
            {exp.start} — {exp.end}
          </div>

          <div className="dot"></div>

          <div className="details">
            <h2>{exp.role}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;