import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import Logo from './Logo'

const Hero = () => {
  return (
    <Wrapper className='section-center' id='heroId'>
      <article className='content'>
        <h1>
          Next Level <br />
          <span>Mech</span>anical <br />
          <span>Key</span>boards
        </h1>
        <p>
          You're spending hours on your keyboard. Make it efficient with a
          superior keyboard. Take your productivity to an uncompromised level.
        </p>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 55vh;
  background: linear-gradient(rgba(11, 36, 104, 0.75), rgba(11, 36, 104, 0.75)),
    url('hero-bcg-3.jpeg');
  background-size: cover;
  display: flex;
  align-items: center;

  .content {
    text-align: center;
    margin: 0 auto;
  }

  .content > * {
    color: var(--clr-white);
  }

  h1 {
    text-transform: uppercase;
    font-size: 3rem;
    white-space: nowrap;
  }

  span {
    color: var(--clr-primary-6);
  }

  p {
    padding-right: 3.5rem;
    padding-left: 3.5rem;
    margin: 1.5rem auto;
  }

  .hero-btn {
    border: 1px solid var(--clr-primary-10);
  }

  @media (max-width: 544px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (min-width: 697px) {
    p {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
  @media (min-width: 1439px) {
    p {
      margin-left: 24rem;
      margin-right: 24rem;
    }
  }
`

export default Hero
