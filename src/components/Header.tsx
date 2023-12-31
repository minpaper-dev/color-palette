import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import tinycolor from 'tinycolor2'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0 0;
`

const Button = styled.button`
  width: 30%;
`
const Logo = styled.img``

const WrapSearch = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0;
`

const Input = styled.input`
  margin-left: 2rem;
`

const SearchButton = styled.button`
  margin-left: 1rem;
  padding: 0 1rem;
`

const Header = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')

  const navigateTo = () => {
    const color = tinycolor(inputValue)

    if (color.isValid()) {
      const noHash = color.toHexString().replace('#', '')
      navigate(`/color/${noHash}`)
      setInputValue('')
    } else {
      navigate(`/`)
    }
  }
  return (
    <Container>
      <Button onClick={() => navigate('/')}>
        <Logo src={logo} alt="logo" />
      </Button>
      <WrapSearch>
        Search Your Color !
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <SearchButton onClick={navigateTo}>🔍</SearchButton>
      </WrapSearch>
    </Container>
  )
}

export default Header
