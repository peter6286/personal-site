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
        <h2>Shuorong Zhu</h2>
        <p>
          <a href="mailto:sz77@illinois.edu">sz77@illinois.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shuorong Zhu. I am a{' '}
        <a href="https://siebelschool.illinois.edu/">UIUC MCS</a> graduate. I currently live in Redwood City, CA, and am a current employee at <a href="https://www.geico.com/tech/">GEICO Tech</a>.
        Previously, I was an intern at{' '}
        <a href="https://www.pcitech.com/">PCI Tech</a> as a Data Engineer and{' '}
        <a href="https://www.jetsweatfitness.com/">JETSWEAT</a> as a Software Engineer.
      </p>
      <ul className="actions">
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
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Shuorong Zhu <Link to="/">Shuorong.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
