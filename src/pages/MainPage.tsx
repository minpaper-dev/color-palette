import ColorItem from '../components/ColorItem'
import styled from 'styled-components'
import { PANTONE } from '../data/color'
import SideMenu from '../components/SideMenu'
import { useRef } from 'react'
import Header from '../components/Header'

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 3% 3%;
  gap: 3rem;
  justify-content: space-between;
`

const SideMenuContainer = styled.div`
  min-width: 15vw;
`

const WrapContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const ShuffleButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 10rem;
  border: 1px solid black;
  width: 6rem;
  height: 6rem;
  border-radius: 5rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 999;
`

const MainPage = () => {
  const colorRef = useRef<any>([])

  const scrollToColor = (index: number) => {
    colorRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Header />
      <Container>
        <SideMenuContainer>
          <SideMenu scrollToColor={scrollToColor} />
        </SideMenuContainer>
        <WrapContainer>
          {PANTONE.map((color, index) => (
            <ColorItem
              key={index}
              color={color}
              index={index}
              colorRef={colorRef}
              isPantone={true}
            />
          ))}
          <ShuffleButton onClick={scrollToTop}>⬆️</ShuffleButton>
        </WrapContainer>
      </Container>
    </>
  )
}

export default MainPage
