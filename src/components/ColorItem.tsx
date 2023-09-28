import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const WrapItem = styled.button`
  width: 15vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
  transition: all ease 100ms;
  &:hover {
    transform: scale(1.05);
  }
`

const Color = styled.div<{ $color: string }>`
  width: 100%;
  height: 15vw;
  background-color: ${props => props.$color};
`

const Description = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

const ColorItem = ({ color }: { color: string }) => {
  const navigate = useNavigate()

  const NO_HASH_COLOR = color.replace('#', '')

  return (
    <WrapItem onClick={() => navigate(`/color/${NO_HASH_COLOR}`)}>
      <Color $color={color} />
      <Description>{color.toLocaleUpperCase()}</Description>
    </WrapItem>
  )
}

export default ColorItem
