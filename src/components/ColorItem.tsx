import React from 'react'
import styled from 'styled-components'

const WrapItem = styled.button`
  width: 15vw;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 2.5rem;
  margin-bottom: 2.5rem;
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
  return (
    <WrapItem>
      <Color $color={color} />
      <Description>{color}</Description>
    </WrapItem>
  )
}

export default ColorItem
