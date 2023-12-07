import styled from 'styled-components'
import { MAJOR_COLOR } from '../data/major'

const Container = styled.div`
  width: 15vw;
`

const Palette = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ebebeb;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 3rem 1rem;
  border-radius: 0.4rem;
  row-gap: 2rem;
`

const PaletteItem = styled.div<{ $color: string }>`
  width: 3vw;
  height: 3vw;
  border-radius: 0.4rem;
  background-color: ${props => `#${props.$color}`};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

const SideMenu = () => {
  return (
    <Container>
      <Palette>
        {MAJOR_COLOR.map(item => (
          <PaletteItem key={item.color} $color={item.color} />
        ))}
      </Palette>
    </Container>
  )
}

export default SideMenu
