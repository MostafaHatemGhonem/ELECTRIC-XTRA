import React, { useEffect, useState } from 'react';
import './App.css';


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

  useEffect(() => { 
    const sections = document.querySelectorAll("section");
    const handelScroll = () => {
      let current = "home"
      sections.forEach((sections) => {
        const sectionTop = sections.offsetTop;
        const sectionHeight = sections.offsetHeight;
        if(window.scrollY >= sectionTop - sectionHeight / 3){
          current = sections.getAttribute("id") || "home";
        }
      })
      setActiveLink(current);
    }
    window.addEventListener("scroll" , handelScroll);
    return () => {
      window.removeEventListener("scroll" , handelScroll);
    }
  }, []);
  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  
  return (
    <div className="header">
      <div className="logo">
        <span className='logoPhase'>
          <div className="secondPhase">
            <div className="thirdPhase"></div>
          </div>
        </span>
        <span className='logoName'>ELECTRIC XTRA</span>
      </div>
      <div className="links">
        <ul>
          {["home", "features", "about", "contact"].map((link) => (
            <li key={link} className={activeLink === link ? "active" : ""}>
              <a
                href={`#${link}`}
                onClick={() => handleClick(link)}
              >
                { link.slice(0)}
              </a>
            </li>
          ))}
        </ul>
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
    <section id="home" className="home section" style={{ height: "100vh", padding: "100px" }}>
      <div className="content">
        <div className="home-content">
          <h1 className='mianTitle'>
            <ChangingText messages={["ELECTRIC DREAMS", "BEYOND LIMITS" ,"FUTURE IS NOW"]} />
          </h1>
          <p className='mainP'>
            <ChangingText messages={["Powering tomorrow's digital revolution today", "Where technology meets infinite possibilities" ,"Enter the next dimension of digital innovation"]} />
          </p>
        </div>
        <div className="choise">
          <div className="start button">
            <a href="#features">Get Started</a>
          </div>
          <div className="learnMore button">
            <a href="#about">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className='features section' style={{ height: "100vh", padding: "100px" }}>
      <h1>Features</h1>
    </section>
  );
}

function About() {
  return (
    <section id="about" className='about section' style={{ height: "100vh", padding: "100px" }}>
      <h1>About</h1>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className='contact section' style={{ height: "100vh", padding: "100px" }}>
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
