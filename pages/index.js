import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const MenuWrapper = styled.nav`
  
`


function Menu() {
  return(
    <nav>
      <div>
        Logo area
      </div>
      <div>
        Links area
      </div>
      <div>
        Buttons area
      </div>
    </nav>
  )

}

export default function Home() {
  return(
    <div>
      <Menu />
     <Title>My page</Title>
     </div>
  )
}
