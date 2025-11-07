import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function BackgroundPage() {
  return (
    <div className="bgc">
      <div className="circle"></div>
      <div className="square"></div>
      <div className="triangle"></div>
      <div className="fullSquare"></div>
    </div>
  );
}

function Header() {
  const [activeLink, setActiveLink] = useState<string | null>("home");
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handelScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false); 
  };

  return (
    <div className="header">
      <div className="logo">
        <span className="logoPhase">
          <div className="secondPhase">
            <div className="thirdPhase"></div>
          </div>
        </span>
        <span className="logoName">ELECTRIC XTRA</span>
      </div>

      <div className={`links ${menuOpen ? "active" : ""}`}>
        <ul>
          {["home", "features", "about", "contact"].map((link) => (
            <li
              key={link}
              className={activeLink === link ? "active" : ""}
            >
              <a href={`#${link}`} onClick={() => handleClick(link)}>
                {link}
              </a>
            </li>
          ))}
          <div className="design"></div>
        </ul>
      </div>

      <div
        className={`container-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
    </div>
  );
}


function ChangingText({ messages }: { messages: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [messages]);

  return <>{messages[index]}</>;
}

function Home() {
  return (
    <section id="home" className="home section">
      <div className="content">
        <div className="home-content">
          <h1 className='mianTitle'>
            <ChangingText messages={["ELECTRIC DREAMS", "BEYOND LIMITS" ,"FUTURE IS NOW"]} />
          </h1>
          <p className='mainP'>
            <ChangingText messages={["Powering tomorrow's digital revolution today", "Where technology meets infinite possibilities" ,"Enter the next dimension of digital innovation"]} />
          </p>
        </div>
      </div>
      <div className="choise">
        <div className="start button">
          <a href="#features">Get Started</a>
          <div className="buttonAfter"></div>
        </div>
        <div className="learnMore button">
          <a href="#about">Learn More</a>
          <div className="buttonAfter"></div>
        </div>
      </div>
    </section>
  );
}
type FeatureKey = "performance" | "security" | "network" | "analytics" | "integration";

function Features() {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("performance");

  const features: Record<FeatureKey, { // here i add type to element in features 
    title: string; 
    description: string;
    items: Record<number, string>; // here i add type to element in items 
  }> & { titles: Record<FeatureKey, string> } = { // like after this i add type to element in titles 
    titles: {
      performance: "⚡  performance",
      security: "🔒  security",
      network: "🌐  network",
      analytics: "📊  analytics",
      integration: "🔧  integration",
    },
    performance: {
      title: "Lightning Fast Performance",
      description: "Experience unprecedented speed with our quantum-powered infrastructure. Built on cutting-edge technology that delivers results at the speed of thought.",
      items: {
        1: "Sub-millisecond response times",
        2: "99.99% uptime guarantee",
        3: "Automatic scaling based on demand",
        4: "Real-time data synchronization",
      }
    },
    security: {
      title: "Military-Grade Security",
      description: "Your data is protected by the most advanced encryption protocols available. Multi-layered security ensures complete protection against cyber threats.",
      items: {
        1: "256-bit AES encryption",
        2: "Biometric authentication",
        3: "Zero-knowledge architecture",
        4: "Real-time threat detection",
        5: "Automated security updates",
      }
    },
    network: {
      title: "Global Neural Network",
      description: "Connect to our worldwide infrastructure that spans across continents. Seamless integration with existing systems and future-proof architecture.",
      items: {
        1: "200+ global data centers",
        2: "Intelligent routing algorithms",
        3: "Cross-platform compatibility",
        4: "5G and satellite connectivity",
        5: "Decentralized architecture",
      }
    },
    analytics: {
      title: "Advanced Analytics",
      description: "Harness the power of AI-driven insights to make data-driven decisions. Real-time analytics and predictive modeling at your fingertips.",
      items: {
        1: "Machine learning algorithms",
        2: "Predictive analytics",
        3: "Custom dashboard creation",
        4: "Real-time data visualization",
        5: "Automated reporting",
      }
    },
    integration: {
      title: "Seamless Integration",
      description: "Connect with thousands of apps and services through our universal API. Built to work with your existing tools and workflows.",
      items: {
        1: "RESTful API architecture",
        2: "WebSocket support",
        3: "SDK for major platforms",
        4: "One-click integrations",
        5: "Custom webhook support",
      }
    }
  };

  const current = features[activeFeature]; // here i add type to current

  return (
    <section id="features" className="features section">
      <h2 className="headFeatures">Core Features</h2>

      <div className="features-details">
        <div className="feature-buttons feature-style">
          {Object.entries(features.titles).map(([key, value]) => ( // here  i used Object.entries to get key and value from features.titles
            <button
              key={key}
              className={`btn designButton  btn-${key} ${activeFeature === key ? "active" : ""}`}
              onClick={() => setActiveFeature(key as FeatureKey)}
            >
              {value}
          </button>
          ))}
        </div>

        <div className="feature-content feature-style">
          <h3 className="headForFeatures">{current.title}</h3>
          <p className='dec'>{current.description}</p>
          <ul>
            {Object.entries(current.items).map(([key, value]) => (
              <li className={`item item-${key}`} key={key}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className='about section'>
      <h1 className="aboutTitle">About Electric Xtra</h1>
      <div className="pioneeringOne pioneering">
        <div className="description">
          <h2 className="title">Pioneering the Digital Frontier</h2>
          <p className="dec1 decr">
            At ELECTRIC XTRA, we're not just building technology – we're crafting the future. Our mission is to bridge the gap between human potential and digital innovation, creating solutions that empower individuals and transform industries.
          </p>
          <p className="dec2 decr">
            Founded by visionaries who saw beyond the limitations of current technology, ELECTRIC XTRA represents a quantum leap in digital infrastructure. We combine cutting-edge research with practical applications to deliver solutions that are both revolutionary and reliable.
          </p>
          <p className="dec3 decr">
            Join us as we redefine what's possible in the digital age. The future isn't something that happens to us – it's something we create together.
          </p>
        </div>
        <div className="designSquare">
          <div className="mainSquare">
            <div className="secondSquare">
              <div className="thirdSquare"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pioneeringTwo pioneering">
        <div className="designSquares">
          <div className="mainSquers">
            <div className="squers"></div>
            <div className="squers"></div>
            <div className="squers"></div>
          </div>
        </div>
        <div className="description">
          <h2 className="title">Innovation at Every Level</h2>
          <p className="dec1 decr">
            Our commitment to excellence drives us to push boundaries and challenge conventions. With a team of world-class engineers, designers, and visionaries, we're creating solutions that not only meet today's needs but anticipate tomorrow's challenges.
          </p>
          <p className="dec2 decr">
            From quantum computing to neural networks, from blockchain to AI, we're at the forefront of every technological revolution. Our integrated approach ensures that each innovation builds upon the last, creating a synergy that amplifies our impact.
          </p>
          <p className="dec3 decr">
            Experience the power of true digital transformation. With ELECTRIC XTRA, you're not just adopting technology – you're embracing a philosophy of continuous evolution and limitless possibility.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className='contact section'>
      <h1 className="contactTitle">get in touch</h1>
      <div className="containerContact">
        <div className="contactForm">
          <form id="contactForm">
            <div className="contName const">
              <label htmlFor="nameForm " className='labelForm'>Name</label>
              <input required type="text" id="nameForm "className='inputForm' />
            </div>
            <div className="contEmail const">
              <label htmlFor="emailForm " className='labelForm'>Email</label>
              <input required type="text" id='emailForm 'className='inputForm' />
            </div>
            <div className="contSubject const">
              <label htmlFor="subjectForm " className='labelForm'>Subject</label>
              <input required type="text" id='subjectForm 'className='inputForm' />
            </div>
            <div className="contMessage const">
              <label htmlFor="messageForm " className='labelForm'>Message</label>
              <textarea required className="inputForm textArea" name="message" id="messageForm "></textarea>
            </div>
            <button type='submit' className='subimt subimt-btn'>Send Message</button>
          </form>
        </div>
        <div className="contactInfo">
          <div className="container-info">
            <h3 className="contactTitle infoTitleContact">Contact With Us</h3>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h4 className="info-title">Email</h4>
                <p className="info-text">mostafahatemghonem@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h4 className="info-title">Phone</h4>
                <p className="info-text">+201096708977</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4 className="info-title">Location</h4>
                <p className="info-text">Elmasoura</p>
              </div>
            </div> 
          </div> 
          <div className="conatiner-maps">
            <div className="plaseholder">
              <p>Interactive Map</p>
              <p>Neo Tokyo, Sector 7</p>  
            </div>
            <div className="overlay"></div>  
          </div>      
        </div>
      </div>
      <footer className='footer'>
        <ul className='linksFooter'>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Careers</a>
        </ul>
        <p className="p">© 2025 ELECTRIC XTRA. All rights reserved. Building tomorrow, today. | Design: <span>Mostafa Hatem</span></p>
      </footer>
    </section>
  );
}

function App() {
  return (
    <>
      <BackgroundPage />
      <Header />
      <Home />
      <Features />
      <About />
      <Contact />
    </>
  );
}

export default App;
