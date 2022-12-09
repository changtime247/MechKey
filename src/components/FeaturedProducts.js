import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>Best sellers</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {featured.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
      <Link to='/products' className='btn'>
        all products
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-gray-2);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 0.9rem;
    img {
      height: 180px;
      background-size: contain;
    }
  }
  .btn {
    display: block;
    width: 143px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 698px) {
    .featured {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default FeaturedProducts
