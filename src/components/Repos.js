import React, { useContext } from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const { repos } = useContext(GithubContext)

  // Selecting all my languages
  const languages = repos.reduce((total, item) => {
    // Selecting the "language" voice from items
    const { language, stargazers_count } = item
    // Statement if for the null result
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
      // Output
      /* 
      CSS: Object { label: "CSS", value: 38 }
      HTML: Object { label: "HTML", value: 14 }
      JavaScript: Object { label: "JavaScript", value: 45 }
      */
    }

    return total
  }, {})

  // Most used
  const mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value
  }).slice(0, 5)

  // Most stars
  const mostPopular = Object.values(languages).sort((a, b) => {
    return b.stars - a.stars
  }).map((item) => {
    return { ...item, value: item.stars }
  }).slice(0, 5)

  // Most Stars / Forks

  let { stars, forks } = repos.reduce((total, item) => {
    // Destructuring of Item
    const { stargazers_count, name, forks } = item;
    // settled the total stars
    total.stars[stargazers_count] = { label: name, value: stargazers_count }
    // settled the total forks
    total.forks[forks] = { label: name, value: forks }
    return total
  }, {
    // Declared as an empty array
    stars: {},
    // Declared as an empty array
    forks: {}
  })
  stars = Object.values(stars).slice(-5).reverse()
  forks = Object.values(forks).slice(-5).reverse()


  return (
    /* section */
    <section className="section">
      {/* section-center */}
      <Wrapper className="section-center">
        {/* Pie3D */}
        <Pie3D data={mostUsed} />
        {/* Column3D */}
        <Column3D data={stars} />
        {/* Doughnut2D */}
        <Doughnut2D data={mostPopular} />
        {/* Bar3D */}
        <Bar3D data={forks} />
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
