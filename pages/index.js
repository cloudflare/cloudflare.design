import React, { useState } from "react"

const Home = () => (
  <>
    <Flex height="530px" bg="gray.5" mb={4}>
      <Flex flexDirection="column" alignItems="flex-start">
        <P
          fontWeight={700}
          my={1}
          display="inline-block"
          color="white"
          bg="black"
          px={3}
        >
          San Francisco
        </P>
        <P
          fontWeight={700}
          pl={2}
          my={1}
          display="inline-block"
          color="white"
          bg="black"
          px={3}
        >
          Design Week 2019
        </P>
        <P pl={2} my={1} display="inline-block" color="white" bg="black" px={3}>
          June 20 28, 2019
        </P>
        <P pl={2} my={1} display="inline-block" color="white" bg="black" px={3}>
          San Francisco, CA
        </P>
      </Flex>
    </Flex>
    <Grid
      gridGap={3}
      px={3}
      mb={4}
      gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
    >
      <Div>
        <A href="/test-blog">
          <Img src="https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
          <P fontSize={5} fontWeight={700} mb={0} mt={1}>
            A title
          </P>
          <P m={0}>Some blurb around the contents of the post</P>
        </A>
      </Div>

      <Div>
        <A href="/test-blog">
          <Img src="https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
          <P fontSize={5} fontWeight={700} mb={0} mt={1}>
            A title
          </P>
          <P m={0}>Some blurb around the contents of the post</P>
        </A>
      </Div>
    </Grid>
    <Div height="280px" bg="gray.6" />
  </>
)

export default Home
