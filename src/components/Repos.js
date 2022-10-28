import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext)
  // Selecting all my languages
  let languages = repos.reduce((total, item) => {
    // Selecting the "language" voice from items
    const { language } = item
    // Statement if for the null result
    if (!language) return total;
    if (!total[language]) {
      total[language] = 1
    }
    total[language] = 30
    return total
  }, {})

  console.log(languages);

  const chartData = [
    {
      label: "HTML",
      value: "13"
    },
    {
      label: "CSS",
      value: "23"
    },
    {
      label: "Javascript",
      value: "80"
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={chartData} />
      </Wrapper>
    </section>
  );
};

/* Wrapper component */
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
