import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const Index = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  }, []); // 添加 [] 避免重复加载

  return (
    <Main
      description={
        "Xiangchao Chen's personal website. Meng student in UWO looking for RA and PhD, "
        + 'developer experience in IoT/5G/Robot industry.'
      }
    >
      <article className="post markdown" id="index">
        <header>
          <div className="title">
            <h2>
              <Link to="/">Introduction</Link>
            </h2>
            <p>Things I do and I want to do.</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>

        <p>
          {' '}
          You can also download my full resume{' '}
          <Link to="/resume">here</Link>
          {/* , <Link to="/projects">projects</Link>,{' '} */}
          {/* view <Link to="/stats">site statistics</Link>, or{' '}
          <Link to="/contact">contact</Link> me. */}
        </p>

      </article>
    </Main>
  );
};

export default Index;
