import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <span>MechKey</span>
    </Wrapper>
  )
}

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-gray-10);
  span {
    color: var(--clr-primary-6);
  }
`

export default Logo
