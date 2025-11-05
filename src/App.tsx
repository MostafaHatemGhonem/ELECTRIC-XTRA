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
    <section id="home" className="home section" style={{ height: "100vh" }}>
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
    <section id="features" className="features section" style={{ height: "100vh" }}>
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
    <section id="about" className='about section' style={{ height: "100vh" }}>
      <h1>About</h1>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className='contact section' style={{ height: "100vh" }}>
      <h1>Contact</h1>
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
