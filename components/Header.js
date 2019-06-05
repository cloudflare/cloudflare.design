import React, { useState } from "react"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Flex py={[2]} position="relative">
      <A mx={2} width="96px" href="/">
        <Logo />
      </A>
      <Div
        display={[isOpen ? "flex" : "none", "block"]}
        flexDirection="column"
        position={["absolute", "static"]}
        width="auto"
        ml="auto"
        bg="gray.9"
        top="50px"
        left="0"
        right="0"
        borderTop={["1px solid", "0 solid"]}
        borderColor="gray.7"
        py={[3, 0]}
      >
        <TextLink
          href="/team"
          fontSize={[3, 2]}
          my={[2, 0]}
          px={2}
          color="black"
        >
          Team
        </TextLink>
        <TextLink fontSize={[3, 2]} my={[2, 0]} px={2} color="black">
          Tools & Kit
        </TextLink>
        <TextLink fontSize={[3, 2]} my={[2, 0]} px={2} color="black">
          Events
        </TextLink>
        <TextLink
          href="https://www.cloudflare.com/careers/departments/design/"
          fontSize={[3, 2]}
          my={[2, 0]}
          px={2}
          color="black"
        >
          Join Us!
        </TextLink>
      </Div>
      <Button
        display={["block", "none"]}
        width="auto"
        onClick={() => setOpen(!isOpen)}
        style={{ cursor: "pointer", marginLeft: "auto" }}
        width="48px"
      >
        {isOpen ? <Close /> : <Menu />}
      </Button>
    </Flex>
  )
}

export default Header
