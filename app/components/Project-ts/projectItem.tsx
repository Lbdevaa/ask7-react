import React from 'react';
import { IProjectsProps } from 'components/Project-ts/models'
import styled from 'styled-components';
import NormalImg from 'components/Img';
const Img = styled(NormalImg)``;

interface ProjectsProps {
  project: IProjectsProps;
}

export default function Project({ project }: ProjectsProps) {
  return (
    <div className="work">
      <a href="#1">{project.link}</a>
      <Img
        src={project.poster}
        alt={project.name}
        loading="lazy"
        className="work__picture"
      />
      <p className="work__name">{project.name}</p>
    </div>
  );
}
