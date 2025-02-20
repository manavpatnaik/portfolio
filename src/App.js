import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaDatabase, FaRocket, FaBullseye, FaTools } from "react-icons/fa";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 text-gray-900">
      <header className="text-center p-16 bg-gradient-to-r from-teal-500 to-green-600 text-white shadow-xl rounded-b-3xl relative">
        <h1 className="text-7xl font-medium">Manav Patnaik</h1>
        <p className="text-3xl mt-10">Software Engineer | Problem Solver | Tech Enthusiast</p>
        <div className="flex justify-center space-x-6 text-3xl mt-10">
          <a href="https://github.com/manavpatnaik" target="blank" className="text-white hover:text-gray-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/manav-patnaik/" target="blank" className="text-white hover:text-gray-300"><FaLinkedin /></a>
          <a href="mailto:dev.manavpatnaik@gmail.com" className="text-white hover:text-gray-300"><FaEnvelope /></a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-12">
        <section className="my-24 text-center">
          <h2 className="text-5xl font-bold text-gray-800">About Me</h2>
          <p className="mt-8 text-gray-700 text-xl leading-relaxed w-3/4 mx-auto">
            Passionate software engineer with expertise in designing and building scalable applications.
            I thrive on solving complex technical problems and continuously improving my skills.
          </p>
          <ul className="list-none text-gray-700 text-xl mt-6 text-left mx-auto w-2/3 bg-white p-6 rounded-xl shadow-lg">
            <li className="flex items-center space-x-3"><FaCode className="text-teal-500" /><span>Backend Development: Java, Spring Boot, Node.js</span></li>
            <li className="flex items-center space-x-3 mt-3"><FaRocket className="text-green-500" /><span>Frontend Development: React, JavaScript, TailwindCSS</span></li>
            <li className="flex items-center space-x-3 mt-3"><FaDatabase className="text-blue-500" /><span>Database Management: PostgreSQL, MySQL, MongoDB</span></li>
            <li className="flex items-center space-x-3 mt-3"><FaCode className="text-purple-500" /><span>Other: Docker, REST APIs, JPA, Git, Linux</span></li>
          </ul>
        </section>

        <section className="my-24 text-center">
          <h2 className="text-5xl font-bold text-gray-800">Education</h2>
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg text-xl text-gray-700 w-2/3 mx-auto">
            <p><strong>Bachelor of Technology in Computer Science</strong></p>
            <p>Amrita School of Computing, Amrita University | 2019 - 2023</p>
          </div>
        </section>

        <section className="my-24 text-left">
          <h2 className="text-5xl font-bold text-gray-800">Experience</h2>
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg text-xl text-gray-700  mx-auto">
            <p><strong>Technical Solutions Engineer</strong> - Arista Networks | 2023 - Present</p>
            <ul className="list-disc list-inside mt-6 text-lg">
              <li>Provided technical support to a customer base of 100+ clients, leveraging Arista's extensive networking portfolio.</li>
              <li>Resolved 160+ complex network issues, reducing average resolution time by 40% through effective collaboration with cross-functional teams.</li>
              <li>Managed 10+ high-priority escalations raised by customers.</li>
              <li>Acquired expertise in diverse networking technologies, including BGP, OSPF, VXLAN, MLAG, PIM, EVPN, IGMP, and IPv6.</li> 
              <li>Authored and published 5+ informative knowledge-based articles and guides enhancing knowledge sharing.</li>
              <li>Developed a Python-based tool to analyze multicast traffic flow in L3 domains, improving troubleshooting efficiency by 80% and
reducing Mean Time To Resolution (MTTR) by 50%</li>
<li>Leveraged advanced text parsing and processing techniques to extract and process PIM protocol data from tech-support files, generating
10+ actionable insights and performing 15+ configuration validation checks.</li>
            </ul>
          </div>
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg text-xl text-gray-700  mx-auto">
            <p><strong>Technical Lead - Web Application Development</strong> - ASCII Club (Amrita University) | 2021 - 2022</p>
            <ul className="list-disc list-inside mt-6 text-lg">
              <li>Led the Web Application Development division of the CSE department's ASCII club, managing a team of 10 members. </li>
              <li>Collaborated with co-leaders, senior associates, and peers in conceptualizing, planning, and executing 20+ web development webinars reaching a total audience of 200 students.</li>
              <li>Delivered 7 comprehensive training sessions in Git, JavaScript, Node.js, HTML, and CSS and increased overall team proficiency.</li>
            </ul>
          </div>
          <div className="mt-8 bg-white p-8 rounded-xl shadow-lg text-xl text-gray-700  mx-auto">
            <p><strong>Web Developer</strong> TEDxAmritaUniversity | 2021 - 2022</p>
            <ul className="list-disc list-inside mt-6 text-lg">
              <li>Developed and maintained the official TEDxAmritaUniversity website, serving as a comprehensive online resource for all event-related information.</li>
            </ul>
          </div>
        </section>



        <section className="my-24 text-center">
          <h2 className="text-5xl font-bold text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mt-10 text-start">
          <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold">Easyshop</h3>
              <div className="mt-6">
                <ul className="list-disc list-inside mt-6 text-lg">
                  <li className="flex items-center text-lg mt-2"><FaBullseye className="text-red-500 mr-2" /> <strong>Objectives & Outcomes </strong></li>
                  <li className="mt-2">To build a REST API for an eCommerce application that allows users to shop for products, add them in their cart and place orders</li>
                  <li className="mt-2">Built a Spring Boot REST API to manage Products, Items, Carts, Users, and Orders</li>
                  <li className="mt-2">Saved data in Postgres, utilizing JPA</li>
                  <li className="mt-2">Implemented authentication using JWT and secured endpoints based on user roles</li>
                  <li className="flex items-center text-lg mt-6"><FaTools className="text-blue-500 mr-2" /> <strong>Tools Used </strong> </li>
                  <li className="mt-2">Java, Spring Boot, Postgres, JWT</li>
                </ul>
                </div>
                <a href="#" className="text-blue-600 font-bold mt-6 inline-block">View Project</a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold">SONY - Sensing Solutions University Program </h3>
              <div className="mt-6">
                <ul className="list-disc list-inside mt-6 text-lg">
                  <li className="flex items-center text-lg mt-2"><FaBullseye className="text-red-500 mr-2" /> <strong>Objectives & Outcomes </strong></li>
                  <li className="mt-2">To construct a server infrastructure for an Edge-based Cyber-Physical System funded by Sony Semiconductor Solutions Corporation.</li>
                  <li className="mt-2">Engineered and deployed a Node.js server and React.js frontend dashboard to enable real-time monitoring and management of the Solar Polyhouse; resulting in a 40% reduction in manual data tracking and increased operational efficiency.</li>
                  <li className="mt-2"> Deployed MQTT-based messaging system for real-time Polyhouse communication, decreasing latency by 25%.</li>
                  <li className="flex items-center text-lg mt-6"><FaTools className="text-blue-500 mr-2" /> <strong>Tools Used </strong> </li>
                  <li className="mt-2">React, Node.js, MySQL, MQTT</li>
                </ul>
                </div>
                <a href="#" className="text-blue-600 font-bold mt-6 inline-block">View Project</a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold">Devnet Bootcamps </h3>
              <div className="mt-6">
                <ul className="list-disc list-inside mt-6 text-lg">
                  <li className="flex items-center text-lg mt-2"><FaBullseye className="text-red-500 mr-2" /> <strong>Objectives & Outcomes </strong></li>
                  <li className="mt-2">Implemented a comprehensive REST API for a Bootcamps portal, enhancing user authentication and security measures.</li>
                  <li className="mt-2"> Prevented NoSQL injection and XSS vulnerabilities, improving overall system security.</li>
                  <li className="flex items-center text-lg mt-6"><FaTools className="text-blue-500 mr-2" /> <strong>Tools Used </strong> </li>
                  <li className="mt-2">Node.js, Express.js, MongoDB, AWS S3, and JWT</li>
                </ul>
                </div>
                <a href="#" className="text-blue-600 font-bold mt-6 inline-block">View Project</a>
            </div>
            {/* <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold">Project 2</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
                <li>API development</li>
                <li>Built with Spring Boot and PostgreSQL</li>
                <li>Optimized for high performance</li>
              </ul>
              <a href="#" className="text-blue-600 font-bold mt-6 inline-block">View Project</a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-semibold">Project 3</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4">
                <li>Real-time dashboard</li>
                <li>Built with React and Firebase</li>
                <li>Dynamic data visualization</li>
              </ul>
              <a href="#" className="text-blue-600 font-bold mt-6 inline-block">View Project</a>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
