import { useState } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="container">
      <Head>
        <title>Data Science Portfolio</title>
        <meta name="description" content="UC Berkeley Data Science Graduate Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </Head>

      <header>
        <nav className="navbar">
          <button 
            className={activeTab === 'home' ? 'active' : ''} 
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button 
            className={activeTab === 'projects' ? 'active' : ''} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
          <button 
            className={activeTab === 'skills' ? 'active' : ''} 
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
        </nav>
      </header>

      <main className="content">
        {activeTab === 'home' && <HomeSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'skills' && <SkillsSection />}
      </main>

      <style jsx global>{`
        :root {
          --primary: #003262; /* Berkeley Blue */
          --secondary: #FDB515; /* California Gold */
          --light: #f8f9fa;
          --dark: #212529;
          --gray: #6c757d;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background-color: var(--light);
        }

        .custom-button {
            padding-left: 1rem;   /* px-2 */
            padding-right: 1rem;  /* px-2 */
            padding-top: 0.5rem;    /* py-2 */
            padding-bottom: 0.5rem; /* py-2 */
            background-color: var(--secondary);
            display: flex;          /* flex */
            justify-content: center; /* justify-center */
            align-items: center;     /* items-center */
            text-align: center;      /* text-center */
            transition: color 0.2s ease; /* optional: smooth hover transition */
            border-radius: 0.25rem;
            text-decoration: none; 
            color: var(--primary);
            margin-top: 32px;
        }

        .custom-button:hover {
            color: black; /* hover:text-black */
            opacity: 0.8;
        }


        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .navbar {
          display: flex;
          justify-content: center;
          padding: 1.5rem 0;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .navbar button {
          background: none;
          border: none;
          padding: 0.5rem 1.5rem;
          margin: 0 0.5rem;
          font-size: 1.1rem;
          cursor: pointer;
          color: var(--gray);
          transition: all 0.3s ease;
          position: relative;
        }

        .navbar button:hover {
          color: var(--primary);
        }

        .navbar button.active {
          color: var(--primary);
          font-weight: 600;
        }

        .navbar button.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background-color: var(--secondary);
        }

        .content {
          flex: 1;
          padding: 2rem 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--primary);
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background-color: var(--secondary);
        }

        /* Home Section Styles */
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 70vh;
        }

        .home-container h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .home-container h2 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--gray);
          font-weight: 400;
        }

        .social-icons {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .social-icon {
          font-size: 2rem;
          color: var(--primary);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icon:hover {
          color: var(--secondary);
          transform: translateY(-5px);
        }

        /* Projects Section Styles */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          height: 200px;
          background-color: #ddd;
          background-size: cover;
          background-position: center;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .project-description {
          color: var(--gray);
          margin-bottom: 1rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-icon {
          font-size: 1.8rem;
          color: var(--gray);
          transition: color 0.3s ease;
        }

        .tech-icon:hover {
          color: var(--secondary);
        }

        /* Skills Section Styles */
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .skills-category {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .skills-category h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 1.3rem;
          position: relative;
        }

        .skills-category h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background-color: var(--secondary);
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1.5rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: scale(1.1);
        }

        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--primary);
        }

        .skill-name {
          font-size: 0.9rem;
          color: var(--gray);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-item:hover .skill-name {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .home-container h1 {
            font-size: 2.2rem;
          }

          .home-container h2 {
            font-size: 1.2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

const HomeSection = () => {
  return (
    <div className="home-container">
      <h1>Yousef Hassan</h1>
      <h2>UC Berkeley B.A. Data Science | Data & Software Engineer</h2>
      <p>Skilled in Python, Java, and data analysis. Passionate about software engineering, problem-solving, and building efficient solutions.</p>
      <a href = "/resume" class="custom-button">Resume</a>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/joe-hassan/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-linkedin-plain social-icon" />
        </a>
        <a href="https://github.com/Joe-Hassan" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-original social-icon" />
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Housing Price Prediction Model",
      description: "Machine learning model to predict Bay Area housing prices with 89% accuracy using Bayesian regression.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tech: ["python", "pandas", "tensorflow", "docker"]
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis of Twitter data with custom BERT implementation.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tech: ["python", "react", "nodejs", "mongodb"]
    },
    {
      title: "Public Health Data Platform",
      description: "Interactive dashboard for California public health metrics with D3.js visualizations.",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      tech: ["javascript", "d3js", "postgresql", "aws"]
    }
  ];

  return (
    <div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <i key={i} className={`devicon-${tech}-plain tech-icon`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillsCategories = [
    {
      title: "Programming & Development",
      skills: [
        { name: "Git", icon: "devicon-git-plain" },
        { name: "React.js", icon: "devicon-react-original" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Apache", icon: "devicon-apache-plain" },
        { name: "Nginx", icon: "devicon-nginx-original" },
        { name: "ARM", icon: "devicon-aarch64-plain" }
      ]
    },
    {
      title: "Databases & Cloud Technologies",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
        { name: "Postgres", icon: "devicon-postgresql-plain" },
        { name: "AWS", icon: "devicon-amazonwebservices-plain" },
        { name: "Google Cloud", icon: "devicon-googlecloud-plain" },
        { name: "Azure", icon: "devicon-azure-plain" }
      ]
    },
    {
      title: "Data Science & Machine Learning",
      skills: [
        { name: "SK-Learn", icon: "devicon-python-plain" },
        { name: "TensorFlow", icon: "devicon-tensorflow-original" },
        { name: "PyTorch", icon: "devicon-pytorch-original" },
        { name: "NumPy", icon: "devicon-numpy-original" },
        { name: "Pandas", icon: "devicon-pandas-original" },
        { name: "Grafana", icon: "devicon-grafana-original" }
      ]
    }
  ];

  return (
    <div>
      <div className="skills-container">
        {skillsCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <i className={`${skill.icon} skill-icon`} />
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};