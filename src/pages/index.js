import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Menubar from "../components/menubar"

import Layout from "../components/layout"

const white = css`
  color: #fff;
`

const IndexPage = () => {
  return (
    <Layout>
      <Menubar />
      <h1 css={white}>WIP</h1>
      <p css={white}>Check back for future development.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    </Layout>
  )
}

export default IndexPage
