import { navLinks } from "../constants";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${scrolled ? "scrolled" : "not-scrolled"} navbar`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Minyeong Jeong
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                </a>
                <span className="underline" />
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Get in touch</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
