import ColorItem from '../components/ColorItem'
import styled from 'styled-components'
import { PANTONE } from '../data/color'
import SideMenu from '../components/SideMenu'

const Container = styled.div`
  display: flex;
  padding: 3%;
  gap: 3rem;
  justify-content: space-between;
`

const WrapColor = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const MainPage = () => {
  return (
    <Container>
      {/* <Header /> */}
      <SideMenu />
      <WrapColor>
        {PANTONE.map((color, index) => (
          <ColorItem key={index} color={color} index={index} />
        ))}
      </WrapColor>
    </Container>
  )
}

export default MainPage
