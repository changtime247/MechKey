import React from 'react'
import { Gi3DStairs, GiArcheryTarget, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <Gi3DStairs />,
    title: 'mission',
    text: 'Our mission is simple. Deliver the best-in-class keyboards to make your day, everyday. Whether thats for work or gaming or bvlogging, make each keystroke flow naturally.',
  },
  {
    id: 2,
    icon: <GiArcheryTarget />,
    title: 'vision',
    text: 'Make every keyboard experience the best possible, customized experience for every person. We see value in the products we offer and see value in your purchase.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: "What began as a personal hobby grew into a business. From custom fitting to selling stock keyboards, it's what we've been doing and will continue to do.",
  },
]

export const products_url = '/.netlify/functions/products'

export const single_product_url = `/.netlify/functions/single-product?id=`
