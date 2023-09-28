import styled from 'styled-components'
import logo from '../assets/logo.png'

const Logo = styled.img`
  width: 30%;
`

const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0;
`

const Input = styled.input`
  margin-left: 2rem;
`

const Header = () => {
  return (
    <>
      <Logo src={logo} />
      <WrapSearch>
        Search Your Color !
        <Input />
      </WrapSearch>
    </>
  )
}

export default Header
