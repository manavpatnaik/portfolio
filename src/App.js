import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaJava,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiJavascript,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiExpress,
  SiGit,
  SiLinux,
  SiAmazonwebservices,
  SiGooglecloud,
  SiPostgresql,
  SiMongodb,
  SiMicrogenetics,
  SiPostman,
  SiLeetcode, // Add LeetCode icon import
} from "react-icons/si";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const [expandedExperience, setExpandedExperience] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about", // Ensure "about" is included here
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200; // Adjust for navbar height
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Adjust for navbar height
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const toggleExperience = (index) => {
    setExpandedExperience(expandedExperience === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-lg">
        <div className="flex justify-between items-center max-w-7xl py-6 container mx-auto">
          <div className="text-3xl font-bold">
            Manav<span className="text-green-400">.</span>
          </div>
          <div className="flex space-x-6">
            {[
              "home",
              "about",
              "experience",
              "skills",
              "projects",
              "contact",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`hover:text-green-400 transition-colors ${
                  activeSection === section ? "text-green-400" : "text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="pt-24">
        {/* Hero Section */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-between p-20 max-w-7xl mx-auto gap-12"
        >
          <div className="md:w-1/2">
            <p className="text-green-400">Java Backend Developer</p>
            <h1 className="text-5xl md:text-7xl font-bold my-4">
              Hello I'm <br />
              <span className="text-green-400">Manav Patnaik</span>
            </h1>
            <p className="text-gray-400 mb-6">
              I specialize in building robust backend systems using Java, Spring
              Boot, and REST APIs, and creating dynamic frontends with React and
              JavaScript.
            </p>
            <div className="flex space-x-6">
              <button className="bg-green-400 text-black px-6 py-3 rounded-full flex items-center hover:bg-green-500 transition-colors">
                Download CV <span className="ml-2">↓</span>
              </button>
              <a
                href="https://github.com/manavpatnaik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/manav-patnaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/remywood/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 text-3xl transition-colors flex items-center"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="manav_img_2.jpg"
              alt="Manav Patnaik"
              className="w-80 h-80 rounded-full border-4 border-green-400"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-32 max-w-7xl mx-auto gap-12">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">About me</h2>
              <p className="text-gray-400">
                I am a passionate software developer with over 12 years of
                experience in backend and frontend development. I enjoy solving
                complex problems and delivering high-quality solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-center justify-center">
              <div>
                <p className="text-gray-400">Name</p>
                <p className="text-xl font-bold">Manav Patnaik</p>
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-xl font-bold">(+40) 321 654 876</p>
              </div>
              <div>
                <p className="text-gray-400">Experience</p>
                <p className="text-xl font-bold">12+ Years</p>
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-xl font-bold">manav.patnaik@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-400">Freelance</p>
                <p className="text-xl font-bold">Available</p>
              </div>
              <div>
                <p className="text-gray-400">Languages</p>
                <p className="text-xl font-bold">English, Spanish</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 max-w-7xl mx-auto gap-12">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">My experience</h2>
              <p className="text-gray-400 mb-6">
                Over 12 years of experience in backend and frontend development.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[0, 1, 2].map((index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-gray-400">2022 - Present</p>
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-green-400">Tech Solutions Inc.</p>
                  {expandedExperience === index && (
                    <ul className="list-disc list-inside text-gray-400 mt-4">
                      <li>
                        Developed scalable backend systems using Java and Spring
                        Boot.
                      </li>
                      <li>Integrated REST APIs for seamless communication.</li>
                    </ul>
                  )}
                  <button
                    onClick={() => toggleExperience(index)}
                    className="mt-4 text-green-400 hover:underline"
                  >
                    {expandedExperience === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 max-w-7xl mx-auto gap-12">
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">My skills</h2>
              <p className="text-gray-400 mb-6">
                Proficient in backend and frontend technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: FaJava, text: "Java" },
                { icon: SiPython, text: "Python" },
                { icon: SiCplusplus, text: "C++" },
                { icon: SiC, text: "C" },
                { icon: SiJavascript, text: "JavaScript" },
                { icon: SiHtml5, text: "HTML" },
                { icon: SiCss3, text: "CSS" },
                { icon: SiTypescript, text: "TypeScript" },
                { icon: SiSpringboot, text: "Spring Boot" },
                { icon: SiExpress, text: "Express.js" },
                { icon: FaReact, text: "React" },
                { icon: FaNodeJs, text: "Node.js" },
                { icon: SiGit, text: "Git" },
                { icon: SiLinux, text: "Linux" },
                { icon: SiAmazonwebservices, text: "AWS" },
                { icon: SiGooglecloud, text: "GCP" },
                { icon: SiPostgresql, text: "SQL" },
                { icon: SiMongodb, text: "MongoDB" },
                { icon: SiMicrogenetics, text: "Microservices" },
                { icon: SiPostman, text: "Postman" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg flex flex-col items-center hover:bg-green-400 hover:text-black transition-colors"
                >
                  <Icon className="text-4xl mb-2" />
                  <p className="text-lg font-bold">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 max-w-7xl mx-auto gap-12">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="flex flex-col gap-12">
            {[0, 1, 2].map((index) => (
              <div key={index} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <p className="text-4xl font-bold text-gray-500">
                    {`0${index + 1}`}
                  </p>
                  <h2 className="text-2xl font-bold my-4">Project Title</h2>
                  <p className="text-gray-400 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Scelerisque consequat, faucibus et, et.
                  </p>
                  <p className="text-green-400">HTML 5, CSS 3, JavaScript</p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-700 p-6 rounded-lg">
                    <p>Project Description</p>
                    <h3 className="text-xl font-bold">Project Subtitle</h3>
                    <p className="text-gray-400">
                      Detailed description of the project goes here.
                    </p>
                    <a
                      href="https://github.com/manavpatnaik/project-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 text-3xl transition-colors mt-4 block"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 max-w-7xl mx-auto gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nesciunt sit illo esse commodi.
              </p>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800 p-4 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-gray-800 p-4 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-800 p-4 rounded-lg"
                />
                <select className="bg-gray-800 p-4 rounded-lg">
                  <option>Select a Service</option>
                </select>
                <textarea
                  placeholder="Type your message here."
                  className="bg-gray-800 p-4 rounded-lg md:col-span-2"
                  rows="5"
                ></textarea>
                <button className="bg-green-400 text-black px-6 py-3 rounded-full md:col-span-2">
                  Send Message
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center text-left space-y-4">
              <div className="flex items-center">
                <span className="text-green-400 mr-4 text-2xl">📞</span>
                <p>(+40) 321 654 876</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-4 text-2xl">📧</span>
                <p>manav.patnaik@gmail.com</p>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-4 text-2xl">📍</span>
                <p>Code Corner, Tech Town 13579</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 py-6 text-center text-gray-400">
          <p>© 2025 Manav Patnaik. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
