import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import SingleColorItem from '../components/SingleColorItem'
import tinycolor from 'tinycolor2'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0 0;
`

const WrapColor = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: ${props => props.$color}; */
  padding: 10rem;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: space-between; */
`

const ColorPage = () => {
  const { color } = useParams()
  const HEX_COLOR = `#${color}`

  const [colors, setColors] = useState<string[]>([])

  const [bright, setBright] = useState<string[]>([])

  const [des, setDes] = useState<string[]>([])

  const [sat, setSat] = useState<string[]>([])

  useEffect(() => {
    getColor()
    getBright()
    getDesaturate()
    getSat()
  }, [])

  const getColor = () => {
    const colorSet = new Set()
    const incrementByTenArray = Array.from({ length: 11 }, (_, i) => i)

    for (let i = incrementByTenArray.length - 1; i >= 0; i--) {
      const value = incrementByTenArray[i]
      const newColor = tinycolor(HEX_COLOR)
        .lighten(value * 10)
        .toString()
      colorSet.add(newColor)
    }

    incrementByTenArray.forEach(value => {
      const newColor2 = tinycolor(HEX_COLOR)
        .darken(value * 10)
        .toString()
      colorSet.add(newColor2)
    })

    const uniqueColors = [...colorSet] as string[]

    setColors(uniqueColors)
  }

  const getBright = () => {
    const colorSet = new Set()
    const incrementByTenArray = Array.from({ length: 11 }, (_, i) => i)

    incrementByTenArray.forEach(value => {
      const newColor2 = tinycolor(HEX_COLOR)
        .brighten(value * 10)
        .toString()
      colorSet.add(newColor2)
    })

    const uniqueColors = [...colorSet] as string[]

    setBright(uniqueColors)
  }

  const getDesaturate = () => {
    const colorSet = new Set()
    const incrementByTenArray = Array.from({ length: 11 }, (_, i) => i)

    incrementByTenArray.forEach(value => {
      const newColor2 = tinycolor(HEX_COLOR)
        .desaturate(value * 10)
        .toString()
      colorSet.add(newColor2)
    })

    const uniqueColors = [...colorSet] as string[]

    setSat(uniqueColors)
  }

  const getSat = () => {
    const colorSet = new Set()
    const incrementByTenArray = Array.from({ length: 11 }, (_, i) => i)

    incrementByTenArray.forEach(value => {
      const newColor2 = tinycolor(HEX_COLOR)
        .saturate(value * 10)
        .toString()
      colorSet.add(newColor2)
    })

    const uniqueColors = [...colorSet] as string[]

    setDes(uniqueColors)
  }

  return (
    <Container>
      <Header />
      <WrapColor $color={`#${color}`}>
        <Wrap>
          {colors.map(color => (
            <SingleColorItem color={color} />
          ))}
        </Wrap>
        <Wrap>
          {bright.map(color => (
            <SingleColorItem color={color} />
          ))}
        </Wrap>
        <Wrap>
          {des.map(color => (
            <SingleColorItem color={color} />
          ))}
        </Wrap>
        <Wrap>
          {sat.map(color => (
            <SingleColorItem color={color} />
          ))}
        </Wrap>

        <Wrap>
          <SingleColorItem color={tinycolor(HEX_COLOR).spin(0).toString()} />
          <SingleColorItem color={tinycolor(HEX_COLOR).spin(90).toString()} />
          <SingleColorItem color={tinycolor(HEX_COLOR).spin(180).toString()} />
          <SingleColorItem color={tinycolor(HEX_COLOR).spin(270).toString()} />
        </Wrap>

        <Wrap>
          유사한 색
          {tinycolor(HEX_COLOR)
            .analogous()
            .map(color => (
              <SingleColorItem color={color.toHex8String()} />
            ))}
        </Wrap>

        <Wrap>
          단색
          {tinycolor(HEX_COLOR)
            .monochromatic()
            .map(color => (
              <SingleColorItem color={color.toHex8String()} />
            ))}
        </Wrap>

        <Wrap>
          분열보색
          {tinycolor(HEX_COLOR)
            .splitcomplement()
            .map(color => (
              <SingleColorItem color={color.toHex8String()} />
            ))}
        </Wrap>

        <Wrap>
          3색 배색
          {tinycolor(HEX_COLOR)
            .triad()
            .map(color => (
              <SingleColorItem color={color.toHex8String()} />
            ))}
        </Wrap>

        <Wrap>
          {tinycolor(HEX_COLOR)
            .tetrad()
            .map(color => (
              <SingleColorItem color={color.toHex8String()} />
            ))}
        </Wrap>

        <Wrap>
          <SingleColorItem
            color={tinycolor(HEX_COLOR).complement().toHex8String()}
          />
        </Wrap>
      </WrapColor>
    </Container>
  )
}

export default ColorPage
