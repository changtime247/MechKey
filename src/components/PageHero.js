import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-1);
  width: 100%;
  height: 5vh;
  margin: auto 0;
  display: flex;
  align-items: center;

  h3 {
    line-height: 4rem;
    margin: auto 0;
  }

  color: var(--clr-primary-10);
  a {
    color: var(--clr-primary-8);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-10);
  }
`

export default PageHero
