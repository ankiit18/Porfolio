import React, { useState } from 'react';
import { Github, Linkedin, Mail,  ExternalLink, FileText, Code, Brain } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="min-h-screen">
      {currentPage === 1 ? (
        // Landing Page with 3D Animation
        <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#0B1120]">
          {/* 3D Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1120]"></div>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  '--star-size': `${Math.random() * 3 + 1}px`,
                  '--star-color': `rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, ${Math.random() * 0.7 + 0.3})`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-fade-in">
              Ankit Kumar
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 animate-slide-up">
              Tech Enthusiast & Problem Solver
            </p>
            <button
              onClick={() => setCurrentPage(2)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 animate-fade-in"
            >
              Explore My Work
            </button>
          </div>

          {/* Animated Circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full mix-blend-screen filter blur-xl animate-float"
                style={{
                  width: `${Math.random() * 400 + 200}px`,
                  height: `${Math.random() * 400 + 200}px`,
                  background: `radial-gradient(circle at center, rgba(${Math.random() * 100 + 100}, ${Math.random() * 100}, 255, 0.15), transparent 70%)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                }}
              />
            ))}
          </div>
        </section>
      ) : (
        // Main Content Pages
        <div className="min-h-screen bg-[#0B1120]">
          {/* About Section */}
          <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                  <img 
                    src="https://github.com/ankiit18/Porfolio/blob/main/src/WhatsApp%20Image%202025-01-07%20at%2014.14.17.jpeg?raw=true"
                    alt="Ankit Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Interests Section */}
              <div className="flex justify-center gap-6 mb-8 animate-slide-up">
                <a href="https://leetcode.com/u/_ank_iit/" target="_blank" className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full hover:bg-gray-700/50 transition-colors">
                  <Code size={20} className="text-yellow-400" />
                  <span className="text-gray-200">DSA Enthusiast</span>
                </a>
                <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
                  <Brain size={20} className="text-blue-400" />
                  <span className="text-gray-200">AI/ML Explorer</span>
                </div>
              </div>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                B.Tech student in Computer Science and Engineering at IIT Gandhinagar, passionate about technology and problem-solving. I excel in tackling challenging DSA problems, exploring AI/ML innovations, and building dynamic websites using the MERN stack.
              </p>

              <div className="flex gap-6 justify-center mb-8">
                <a href="https://github.com/ankiit18" target="_blank" className="hover:text-blue-400 transition-colors invert invert-on-hover">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/ankit-kumar-69397b286" target="_blank" className="hover:text-blue-400 transition-colors invert invert-on-hovert">
                  <Linkedin size={50} />
                </a>
                <a href="mailto:23110030@iitgn.ac.in" className="hover:text-blue-400 transition-colors invert invert-on-hover">
                  <Mail size={32} />
                </a>
              </div>

              <a 
                href="https://drive.google.com/file/d/1ZxIkcXk_EXPyUn04ddNN-11JQTghgJnY/view?usp=sharing"
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
              >
                View Resume <FileText size={20} />
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section className="py-20 px-4 bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Experience</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {experiences.map((experience, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2 text-white">{experience.role}</h3>
                    <p className="text-blue-400 mb-4">{experience.company}</p>
                    <p className="text-gray-400 mb-2">{experience.duration}</p>
                    <ul className="list-disc list-inside text-gray-300">
                      {experience.description.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="py-20 px-4 bg-[#0B1120]">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gray-900 rounded-full text-sm text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                      >
                        View Project <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4 bg-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Let's Connect</h2>
              <p className="text-xl text-gray-300 mb-12">
                Let's connect and create something extraordinary!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:23110030@iitgn.ac.in"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-200 to-purple-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                >
                  <Mail size={20} /> Email Me
                </a>
                <a 
                  href="https://github.com/ankiit18"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-200 to-gray-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105  "
                >
                  <Github size={20} /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/ankit-kumar-69397b286"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-200 to-blue-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 text-center text-gray-400 bg-[#0B1120]">
            <p>© 2024 Ankit Kumar. All rights reserved.</p>
          </footer>
        </div>
      )}
    </div>
  );
}

const experiences = [
  {
    role: "Prompt Engineer",
    company: "Soul AI",
    duration: "Nov 2024 - Dec 2024",
    description: [
      "Train AI using promts.",
      "Use my skills of dsa, mern and Ai/Ml to correct them.",
      "Also correct them were they are wrong.",
    ],
  },
  {
    role: "Student Mentor",
    company: "Physics Wallah",
    duration: "April 2024-September 2024",
    description: [
      "I provided guidance and motivation to JEE aspirants.",
      "Helped them stay focused and achieve their goals.",
      "Also help them with PCM questions."
    ]
  }
];

const projects = [
  {
    title: "Tesla Stock Price Prediction Model",
    description: "Developed a stock analyzer that predicts future stock prices using Prophet, a forecasting tool created by META.",
    image: "https://pbs.twimg.com/media/FzLAXfFWwAI6Yz9?format=jpg&name=large",
    technologies: ["Python", "TensorFlow", "Machine Learning","Deep Learning"],
    link: "https://colab.research.google.com/drive/1YX-GOnT7u2wwqZcirJKB-dMF-8NaMNqP?usp=sharing"
  },
  {
    title: "Image Classifier",
    description: "I developed an ML algorithm capable of classifying handwritten numbers.",
    image: "https://www.mdpi.com/applsci/applsci-09-03169/article_deploy/html/images/applsci-09-03169-g001.png",
    technologies: ["Machine Learning", "Keras", "TensorFlow","Mnist"],
    link: "https://colab.research.google.com/drive/17h5METSwuMw7XmOdb3XD8918WtIXu-Nh?usp=sharing"
  }
];

export default App;
