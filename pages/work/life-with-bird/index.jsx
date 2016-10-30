import React, { Component } from 'react';
import { projects } from 'data/projects.json';

import Wrapper from 'components/wrapper';
import { ProjectPage } from 'components/project';

import styles from '../project/styles.module.css';

export default class LifeWithBird extends Component {
  render() {
    const project = projects.find(_project => _project.slug === 'life-with-bird');

    return (
      <ProjectPage project={project}>
        <Wrapper>
          <div className={styles.intro}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
        </Wrapper>
      </ProjectPage>
    );
  }
}
