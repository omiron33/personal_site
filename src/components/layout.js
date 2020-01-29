import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        file(base: { eq: "background.jpg" }) {
          publicURL
        }
      }
    `
  )

  const BodyDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${data.file.publicURL});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
  `

  return (
    <>
      <BodyDiv>
        <main>{children}</main>
        <footer></footer>
      </BodyDiv>
    </>
  )
}

export default Layout
