import '../styles/about.css';
// import profileImg from '../assets/about3.jpg';

const skillGroups = {
  Frontend: [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  ],
  Backend: [
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'Oracle DB', icon: 'devicon-oracle-original colored' },
  ],
  Tools: [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'Vercel', icon: 'devicon-vercel-plain colored' },
  ],
};

function About() {
  return (
    <>
      {/* ================= ABOUT HERO ================= */}
      <section
        id="about"
        className="about-bg"
        // style={{ backgroundImage: `url(${profileImg})` }}
      >
        <div className="about-overlay">
          <div className="about-text">
            <h2>
              About <span>Me</span>
            </h2>

            <p>
              I’m <strong>Arshan Sameer Shaikh</strong>, a motivated <strong>Full Stack Java Developer</strong> with a strong interest in designing and developing scalable, user-focused web applications.
               I enjoy solving real-world problems through technology and working across both frontend and backend systems.
            </p>

            <p>
              My technical skill set includes <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, and
              <strong> Oracle Database</strong>, and I actively apply these technologies in project-based learning to strengthen my development expertise. 
              As a fresher, I am eager to contribute to innovative teams, follow industry best practices, and continuously grow as a software professional.
            </p>

            <div className="about-actions">
              <a
                href="https://canva.link/w5kx4818wn2wpyp"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="skills">
        <h2 class="skill-heading"><span>My</span> Skills</h2>
        {Object.entries(skillGroups).map(([group, items]) => (
          <div className="skill-group" key={group}>
            <h4>{group}</h4>

            <div className="skills-horizontal">
              {items.map((skill, index) => (
                <div className="skill-logo" key={index}>
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default About;
