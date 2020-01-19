import React from "react"
import styled from "styled-components"
import { Container, Divider } from "semantic-ui-react"
import { scale, rhythm } from "../utils/typography"

import SEO from "../components/atoms/Seo"
import App from "../components/organisms/App"

export default () => (
  <App>
    <SEO title="404" description="無効なURLです。" />
    <Container textAlign="center" style={{ paddingTop: rhythm(4) }}>
      <Title>404</Title>
      <Divider />
      <Text>
        There isn't a web site you are looking for.
        <span role="img" aria-label="sad">
          {" "}
          😢{" "}
        </span>
      </Text>
    </Container>
  </App>
)

const Title = styled.h1`
  font-size: ${scale(1).fontSize}
  line-height: ${rhythm(2)}
`
const Text = styled.p`
  font-size: ${scale(1 / 2).fontSize}
  line-height: ${rhythm(2)}
  margin: ${rhythm(3)}
`
