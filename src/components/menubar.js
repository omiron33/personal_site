import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import HamburgerMenu from "./hamburger"

const MenuBardiv = styled.div`
  width: 100vw;
  height: 100px;
  display: grid;
  grid-template-columns: 100px 1fr 50px;
  z-index: 100;
`

const centerjustify = css`
  justify-self: center;
  align-self: center;
`

const menubar = () => {
  return (
    <MenuBardiv>
      <HamburgerMenu css={centerjustify} />
    </MenuBardiv>
  )
}

export default menubar
