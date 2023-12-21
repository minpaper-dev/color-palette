import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import tinycolor from 'tinycolor2'
import { useEffect, useState } from 'react'
import ColorItem from '../components/ColorItem'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0 0;
`

const WrapColor = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 10rem;
  font-size: 2rem;
`

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 5rem;
  font-size: 1.5rem;
  align-items: center;
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
  }, [color])

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

  if (!color) return

  return (
    <Container>
      <Header />
      <ColorItem color={color} index={0} />
      <WrapColor>
        채도
        <Wrap>
          {colors.map(color => (
            <ColorItem color={color.replace('#', '')} index={1} />
          ))}
        </Wrap>
        채도
        <Wrap>
          {bright.map(color => (
            <ColorItem color={color.replace('#', '')} index={0} />
          ))}
        </Wrap>
        채도
        <Wrap>
          {des.map(color => (
            <ColorItem color={color.replace('#', '')} index={0} />
          ))}
        </Wrap>
        채도
        <Wrap>
          {sat.map(color => (
            <ColorItem color={color.replace('#', '')} index={0} />
          ))}
        </Wrap>
        채도
        <Wrap>
          <ColorItem
            color={tinycolor(HEX_COLOR).spin(0).toString().replace('#', '')}
            index={0}
          />
          <ColorItem
            color={tinycolor(HEX_COLOR).spin(90).toString().replace('#', '')}
            index={0}
          />
          <ColorItem
            color={tinycolor(HEX_COLOR).spin(180).toString().replace('#', '')}
            index={0}
          />
          <ColorItem
            color={tinycolor(HEX_COLOR).spin(270).toString().replace('#', '')}
            index={0}
          />
        </Wrap>
        유사한 색
        <Wrap>
          {tinycolor(HEX_COLOR)
            .analogous()
            .map(color => (
              <ColorItem
                color={color.toHexString().replace('#', '')}
                index={0}
              />
            ))}
        </Wrap>
        단색
        <Wrap>
          {tinycolor(HEX_COLOR)
            .monochromatic()
            .map(color => (
              <ColorItem
                color={color.toHexString().replace('#', '')}
                index={0}
              />
            ))}
        </Wrap>
        분열보색
        <Wrap>
          {tinycolor(HEX_COLOR)
            .splitcomplement()
            .map(color => (
              <ColorItem
                color={color.toHexString().replace('#', '')}
                index={0}
              />
            ))}
        </Wrap>
        3색 배색
        <Wrap>
          {tinycolor(HEX_COLOR)
            .triad()
            .map(color => (
              <ColorItem
                color={color.toHexString().replace('#', '')}
                index={0}
              />
            ))}
        </Wrap>
        3색 배색
        <Wrap>
          {tinycolor(HEX_COLOR)
            .tetrad()
            .map(color => (
              <ColorItem
                color={color.toHexString().replace('#', '')}
                index={0}
              />
            ))}
        </Wrap>
        3색 배색
        <Wrap>
          <ColorItem
            color={tinycolor(HEX_COLOR)
              .complement()
              .toHexString()
              .replace('#', '')}
            index={0}
          />
        </Wrap>
      </WrapColor>
    </Container>
  )
}

export default ColorPage
