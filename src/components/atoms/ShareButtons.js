import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"

export default ({ url, title }) => {
  return (
    <Container className="columns is-mobile">
      <ShareButton color="#3b5998" className="column">
        <a
          href={`https://www.facebook.com/share.php?u=${url}`}
          target="_blank"
          rel="noreferrer noopener"

        >
          <i className="fab fa-facebook" />
        </a>
      </ShareButton>
      <ShareButton color="#55acee" className="column">
        <a
          href={`https://twiter.com/share?url=${url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-twitter" />
        </a>
      </ShareButton>
      <ShareButton color="#008fde" className="column">
        <a
          href={`https://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          B!
        </a>
      </ShareButton>
      <ShareButton color="#d3505a" className="column">
        <a
          href={`https://getpocket.com/edit?url=${url}&title=${title}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fab fa-get-pocket" />
        </a>
      </ShareButton>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 0;
  width: 100%
  margin: auto
`

const ShareButton = styled.div`
  background: ${props => props.color}
  padding: 0
  & > a {
    display: block;
    color: #fff;
    padding: ${rhythm(1 / 4)} 0
    text-align: center;
    font-size: 1.3em;
  }
`
