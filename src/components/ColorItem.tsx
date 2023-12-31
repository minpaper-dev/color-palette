import styled from 'styled-components'
import { MAJOR_COLOR } from '../data/major'

const WrapItem = styled.button`
  width: 10vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
  border-radius: 0.4rem;
  transition: all ease 100ms;
  &:hover {
    transform: scale(1.05);
  }
`

const Color = styled.div<{ $color: string }>`
  width: 100%;
  height: 10vw;
  background-color: ${props => `#${props.$color}`};
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
`

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
`

const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
`

const Description = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`

const ColorItem = ({
  color,
  index,
  colorRef,
  isPantone,
}: {
  color: string
  index: number
  colorRef?: any
  isPantone?: boolean
}) => {
  return (
    <WrapItem
      ref={element => {
        if (MAJOR_COLOR.includes(color)) {
          colorRef.current[MAJOR_COLOR.indexOf(color)] = element
        }
      }}
    >
      <Color $color={color} />
      <WrapContent>
        {isPantone && <Title>{`PANTONE ${index + 100}`}</Title>}

        <Description>{color.toLocaleUpperCase()}</Description>
      </WrapContent>
    </WrapItem>
  )
}

export default ColorItem
