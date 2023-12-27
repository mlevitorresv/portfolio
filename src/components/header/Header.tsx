import React from 'react'
import { HeaderStyled } from './HeaderStyled'
import { HeaderTitleStyled } from './HeaderTitleStyled';
import { BurgerMenuIconSyled } from '../common/IconStyled';

export const Header = (): React.JSX.Element => {
  return (
    <HeaderStyled>
        <HeaderTitleStyled>MLEVITORRESV</HeaderTitleStyled>
        <BurgerMenuIconSyled />
  </HeaderStyled>
  )
}
