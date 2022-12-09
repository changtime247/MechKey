import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='backlit keyboard' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            A computer keyboard is not just another device Since the 70s, it's
            been changing the world one key punch at a time. Each detail was
            painstakingly paid attention to bring to us, in the modern day, the
            keyboard as we know it. Unlike typewriter engraving, today's
            keyboard is generally interpreted by software: what physical key was
            pressed. But even in today's normal usage, we want to bring the old
            school type feel so that whether you're writing code, or surfing the
            web or gaming, each key stroke should be felt. It is our passion to
            bring to you the very very best keyboards. We hope you find the
            right one for you.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 420px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-gray-6);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
