import React, { useState, useEffect, useLayoutEffect } from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { useTransition, animated } from "react-spring"
import hamburgerIcon from "../components/icons/hamburger.png"

const hamburger = () => {
  const [open, setOpen] = useState(false)
  const transition = useTransition(open, null, {
    from: { opacity: `0` },
    enter: { opacity: `1` },
    leave: { opacity: `0` },
  })

  const topdiv = css`
    position: fixed;
    right: 25px;
    top: 36px;
    display: grid;
    justify-items: right;
    cursor: pointer;
  `

  const imagestyle = css`
    width: 30px;
    z-index: 109;
  `

  const animateddivstyle = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: blueviolet;
    z-index: 99;
  `

  const listyle = css`
    font-size: 60px;
    font-weight: bold;

    list-style: none;
    margin: 40px;
    width: auto;
  `

  return (
    <StaticQuery
      query={graphql`
        query HamburgerQuery {
          site {
            siteMetadata {
              links
            }
          }
        }
      `}
      render={data => (
        <>
          <div css={topdiv} onClick={() => setOpen(!open)}>
            <div>
              <img src={hamburgerIcon} alt="Menu_Icon" css={imagestyle} />
            </div>
            {transition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div key={key} style={props} css={animateddivstyle}>
                    <ul>
                      {data.site.siteMetadata.links.map(link => {
                        return (
                          <li css={listyle} key={link}>
                            <Link
                              to={`/${link}`}
                              css={css`
                                color: purple;
                                text-decoration: none;
                              `}
                            >
                              {link}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </animated.div>
                )
            )}
          </div>
        </>
      )}
    />
  )
}

export default hamburger
