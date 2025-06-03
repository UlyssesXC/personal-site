import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Xiangchao(Chase) Chen</h2>
        <p>
          <a href="mailto:xche683@uwo.ca">xche683@uwo.ca</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>
        · I&apos;m a Master of Engineering student in ECE at{' '}
        <a href="https://www.eng.uwo.ca/electrical/">Western University</a>.<br />
        · I’m interested in Embodied Intelligence,<br />
        building on my 4 years experience in IoT, 5G, and Industrial Robotics.<br />
        · I&apos;m seeking opportunities for <strong>RA</strong> positions
        or <strong>PhD</strong> programs in this exciting field.
      </p>
      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Xiangchao Chen <Link to="/">chasec.ee</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
