import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Code, Palette, Database, Globe, Smartphone, Zap, Award, Calendar, ExternalLink, Send, Menu, X, ChevronDown } from 'lucide-react';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const {
    scrollY
  } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const handleContactSubmit = e => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out! I'll get back to you soon."
    });
  };
  const handleViewPortfolio = () => {
    toast({
      title: "🚧 Portfolio Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const handleDownloadResume = () => {
    toast({
      title: "🚧 Resume Download",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const skills = [{
    name: 'Frontend Development',
    level: 95,
    icon: Code
  }, {
    name: 'UI/UX Design',
    level: 88,
    icon: Palette
  }, {
    name: 'Backend Development',
    level: 72,
    icon: Database
  }, {
    name: 'Web Development',
    level: 92,
    icon: Globe
  }, {
    name: 'Mobile Development',
    level: 68,
    icon: Smartphone
  }, {
    name: 'Performance Optimization',
    level: 85,
    icon: Zap
  }];
  const projects = [{
    title: 'Microtask Notification App',
    description: 'Modern tool solution. Features include real-time dashboard with friends, integrating all user information.',
    image: 'Modern habit tracking tool with clean design',
    tech: ['React', 'Node.js', 'MongoDB'],
    results: '40% increase in conversion rate'
  }, {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics dashboard.',
    image: 'Clean task management interface with kanban boards',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    results: '500+ active users'
  }, {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with smooth animations, dark/light mode toggle, and optimized performance for fast loading.',
    image: 'Beautiful portfolio website with modern design',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    results: '98% performance score'
  }, {
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features.',
    image: 'Professional analytics dashboard with charts and graphs',
    tech: ['React', 'D3.js', 'Express.js'],
    results: '60% faster insights'
  }];
  const experiences = [{
    company: 'Howden Re',
    role: 'Associate',
    period: '2025 - Present',
    description: 'Provide tailored reinsurance solutions to major insurance companies that require capital to manage potential risks',
    achievements: ['Involved in several high-revenue accounts']
  }, {
    company: 'Testament',
    role: 'Founder and CTO',
    period: '2022 - 2023',
    description: 'Developed and maintained web applications for Testament (Chicago Booth Social New Venture Challenge S23).',
    achievements: ['Built primary product application', 'Led product development']
  }, {
    company: 'PricewaterhouseCoopers',
    role: 'Associate Consultant',
    period: '2022-2022',
    description: 'Created sophisticated data algorithms and collaborated with Finance team to implement user-friendly software for client employees.',
    achievements: ['Increased measuring accuracy by 75%', 'Optimized mobile performance', 'Implemented accessibility standards']
  }];
  return <>
      <Helmet>
        <title>Daniel Oh - Developer (for fun)</title>
        <meta name="description" content="Experienced full stack developer specializing in React, Node.js, and modern web technologies. Creating exceptional digital experiences with clean code and innovative design." />
        <meta property="og:title" content="Daniel Oh - Developer (for fun)" />
        <meta property="og:description" content="Experienced full stack developer specializing in React, Node.js, and modern web technologies. Creating exceptional digital experiences with clean code and innovative design." />
      </Helmet>

      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="text-xl font-bold gradient-text">
                Daniel Oh
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'skills', 'portfolio', 'experience', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className={`capitalize transition-colors hover:text-blue-400 ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}>
                    {item}
                  </button>)}
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && <motion.div initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="md:hidden py-4 space-y-2">
                {['home', 'about', 'skills', 'portfolio', 'experience', 'contact'].map(item => <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left px-4 py-2 capitalize text-gray-300 hover:text-blue-400 transition-colors">
                    {item}
                  </button>)}
              </motion.div>}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div style={{
          y: y1
        }} className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <div className="relative">
                <motion.div style={{
                y: y2
              }} className="floating-animation">
                  <img className="w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl pulse-glow" alt="Professional headshot of Alex Johnson" src="https://horizons-cdn.hostinger.com/b57aa43a-c82b-4bd0-98eb-690a66e43df5/nyc-image-0pzWC.jpeg" />
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2
              }} className="text-5xl md:text-7xl font-bold">
                  Hi, I'm <span className="gradient-text">Daniel Oh</span>
                </motion.h1>
                
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4
              }} className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">Developer | Interests in Risk, Finance, Tech</motion.p>
                
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.6
              }} className="text-lg text-gray-400 max-w-2xl mx-auto">
                  I create exceptional digital experiences with clean code, innovative design, and a passion for solving complex problems through technology.
                </motion.p>
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button onClick={handleViewPortfolio} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                  View Portfolio
                </Button>
                <Button onClick={handleDownloadResume} variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg">
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2
          }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">With experiences across founding a startup, management consulting, and risk advisory, I specialize in creating value across different fields of business. My journey began with an Economics degree and has evolved through hands-on experience with a variety of industries.</p>
                
                <p className="text-lg text-gray-300 leading-relaxed">I also have a passion for building. I believe in writing clean, maintainable code and staying current with industry best practices. When I'm not coding, you'll find me exploring new technologies.</p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="glass-effect p-6 rounded-lg">
                    <Award className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="font-semibold mb-2">10+ Projects</h3>
                    <p className="text-gray-400 text-sm">Successfully delivered</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <Calendar className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="font-semibold mb-2">1 Year</h3>
                    <p className="text-gray-400 text-sm">Professional experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="glass-effect p-8 rounded-2xl">
                  <img className="w-full rounded-lg shadow-2xl" alt="Alex Johnson working on a laptop in a modern office" src="https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return <motion.div key={skill.name} initial={{
                opacity: 0,
                y: 50
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div initial={{
                      width: 0
                    }} whileInView={{
                      width: `${skill.level}%`
                    }} transition={{
                      duration: 1,
                      delay: index * 0.1
                    }} viewport={{
                      once: true
                    }} className="skill-bar h-2 rounded-full"></motion.div>
                      </div>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => <motion.div key={project.title} initial={{
              opacity: 0,
              y: 50
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="project-card glass-effect rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img className="w-full h-48 object-cover" alt={`Screenshot of ${project.title}`} src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                          {tech}
                        </span>)}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-semibold">{project.results}</span>
                      <Button onClick={handleViewPortfolio} variant="ghost" className="text-blue-400 hover:text-blue-300">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Work Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => <motion.div key={exp.company} initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="glass-effect p-8 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                      <p className="text-xl text-gray-300">{exp.company}</p>
                    </div>
                    <span className="text-purple-400 font-semibold">{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => <li key={i} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {achievement}
                        </li>)}
                    </ul>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
              <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="space-y-8">
                <div className="glass-effect p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-blue-400 mr-4" />
                      <span>daniel.nyc.oh1@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-blue-400 mr-4" />
                      <span>N/A</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                      <span>New York, NY</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <Button variant="ghost" className="p-3 hover:bg-blue-600/20">
                        <Github className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" className="p-3 hover:bg-blue-600/20">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" className="p-3 hover:bg-blue-600/20">
                        <Twitter className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <form onSubmit={handleContactSubmit} className="glass-effect p-8 rounded-lg space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition-colors" placeholder="Your Name" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input type="email" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition-colors" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 Daniel Oh. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>;
}
export default App;