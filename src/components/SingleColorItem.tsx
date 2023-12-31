import styled from 'styled-components'
import tinycolor from 'tinycolor2'

const Container = styled.div<{ $color: string; $isDark: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 20rem;
  background-color: ${props => props.$color};
  color: ${props => (props.$isDark ? 'white' : 'black')};
`

const SingleColorItem = ({ color }: { color: string }) => {
  return (
    <Container $color={color} $isDark={tinycolor(color).isDark()}>
      {color.toLocaleUpperCase()}
    </Container>
  )
}

export default SingleColorItem
