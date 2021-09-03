import React from 'react'
import Logo from '../../../theme/Logo'
import Text from '../../foundation/Text'
import { MenuWrapper } from './styles/MenuWrapper'
import { Button } from '../Button'

export default function Menu() {

  const links = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Perguntas frequentes',
      url: '/faq'
    },
    {
      text: 'Sobre',
      url: '/sobre'
    },
  ]

  return(
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CenterSide>
        {links.map((link) => {
          return(
            <li key={"link.url"}>
              <Text variant="smallestException" tag="a" href={link.url}>
                {link.text}
              </Text>
            </li>
          )
        })}
      </MenuWrapper.CenterSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary">
          Entrar
        </Button>
        <Button variant="primary">
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  )
}