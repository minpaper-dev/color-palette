import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import tinycolor from 'tinycolor2'

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

const Button = styled.button`
  margin-left: 1rem;
  padding: 0 1rem;
`

const Header = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('')

  const navigateTo = () => {
    if (tinycolor(inputValue).isValid()) {
      const noHash = inputValue.replace('#', '')
      navigate(`/color/${noHash}`)
    }
  }
  return (
    <>
      <Logo src={logo} />
      <WrapSearch>
        Search Your Color !
        <Input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <Button onClick={navigateTo}>🔍</Button>
      </WrapSearch>
    </>
  )
}

export default Header
