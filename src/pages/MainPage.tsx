import { useEffect, useState } from 'react'
import ColorItem from '../components/ColorItem'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0 10rem;
`

const WrapColor = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ShuffleButton = styled.button`
  position: fixed;
  bottom: 5rem;
  border: 1px solid black;
  padding: 1rem 4rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 999;
`

const MainPage = () => {
  useEffect(() => {
    createUniqueColors()
  }, [])

  const [colors, setColors] = useState<string[]>([])

  const getRandomColorCode = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    const rHex = r.toString(16).padStart(2, '0')
    const gHex = g.toString(16).padStart(2, '0')
    const bHex = b.toString(16).padStart(2, '0')

    const colorCode = `#${rHex}${gHex}${bHex}`

    return colorCode
  }

  const createUniqueColors = () => {
    const colorArr: string[] = []
    const count = 20

    while (colorArr.length < count) {
      const randomHex = getRandomColorCode()
      if (!colorArr.includes(randomHex)) {
        colorArr.push(randomHex)
      }
    }

    setColors(colorArr)
  }

  return (
    <Container>
      <Header />
      <WrapColor>
        {colors.map(color => (
          <ColorItem key={color} color={color} />
        ))}
      </WrapColor>
      <ShuffleButton onClick={createUniqueColors}>SHUFFLE 💖</ShuffleButton>
    </Container>
  )
}

export default MainPage
