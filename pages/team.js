import React, { useState } from "react"

const locations = [
  "London, UK",
  "Toronto, Canada",
  "Austin, TX",
  "San Francisco, CA"
]

const teamData = [
  { name: "Sam Mason de Caires", title: "UX Engineer", location: locations[0] },
  {
    name: "Pete Thomas",
    title: "Lead Product Designer",
    location: locations[0]
  },
  {
    name: "Mru Kodali",
    title: "Lead UX Researcher",
    location: locations[0]
  },
  {
    name: "Syeef Karim",
    title: "Product Designer",
    location: locations[0]
  },
  {
    name: "Adam Morse",
    title: "Product Design Lead",
    location: locations[1]
  },
  {
    name: "Bob Zavala",
    title: "Senior Product Designer",
    location: locations[2]
  },
  {
    name: "Bethany Sonefeld",
    title: "Senior Product Designer",
    location: locations[2]
  },
  {
    name: "Anna Effort",
    title: "Product Designer",
    location: locations[3]
  },
  {
    name: "Eric Tsai",
    title: "Product Designer",
    location: locations[3]
  },
  {
    name: "Julie Huchet",
    title: "Product Designer",
    location: locations[3]
  },
  {
    name: "Maggie Yue",
    title: "Product Designer",
    location: locations[3]
  },
  {
    name: "Susan Lin",
    title: "Lead Product Designer & Design Manager",
    location: locations[3]
  }
]

const Team = () => {
  const [selectedLocation, setLocation] = useState(false)
  return (
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
            Our Team
          </P>
          <P
            pl={2}
            my={1}
            display="inline-block"
            color="white"
            bg="black"
            px={3}
          >
            Design Week 2019
          </P>
          <P
            pl={2}
            my={1}
            display="inline-block"
            color="white"
            bg="black"
            px={3}
          >
            June 20 28, 2019
          </P>
          <P
            pl={2}
            my={1}
            display="inline-block"
            color="white"
            bg="black"
            px={3}
          >
            San Francisco, CA
          </P>
        </Flex>
      </Flex>

      <Flex px={3} mb={4}>
        <Div width="auto" pr={4}>
          <Button
            fontWeight={selectedLocation === false && 700}
            fontSize={3}
            display="block"
            bg="transparent"
            style={{
              webkitAppearance: "none",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setLocation(false)}
          >
            All
          </Button>
        </Div>
        <Div width="auto" pr={4}>
          <Button
            fontWeight={selectedLocation === locations[0] && 700}
            fontSize={3}
            display="block"
            bg="transparent"
            mr={4}
            style={{
              webkitAppearance: "none",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setLocation(locations[0])}
          >
            London, UK
          </Button>
        </Div>
        <Div width="auto" pr={4}>
          <Button
            fontWeight={selectedLocation === locations[1] && 700}
            fontSize={3}
            display="block"
            bg="transparent"
            mr={4}
            style={{
              webkitAppearance: "none",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setLocation(locations[1])}
          >
            Toronto, Canada
          </Button>
        </Div>
        <Div width="auto" pr={4}>
          <Button
            fontWeight={selectedLocation === locations[2] && 700}
            fontSize={3}
            display="block"
            bg="transparent"
            mr={4}
            style={{
              webkitAppearance: "none",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setLocation(locations[2])}
          >
            Austin, TX
          </Button>
        </Div>
        <Div width="auto" pr={4}>
          <Button
            fontWeight={selectedLocation === locations[3] && 700}
            fontSize={3}
            display="block"
            bg="transparent"
            mr={4}
            style={{
              webkitAppearance: "none",
              border: "none",
              cursor: "pointer"
            }}
            onClick={() => setLocation(locations[3])}
          >
            San Francsico, CA
          </Button>
        </Div>
      </Flex>
      <Grid
        gridGap={3}
        px={3}
        mb={4}
        gridTemplateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}
      >
        {teamData
          .filter(t =>
            selectedLocation ? t.location === selectedLocation : true
          )
          .map(t => (
            <Div key={t.name}>
              <A>
                <Img src="https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                <P fontSize={3} mb={0} mt={1}>
                  {t.name}
                </P>
                <P fontSize={2} m={0} color="gray.5">
                  {t.title}
                </P>
                <Flex fontSize={1} m={0} color="gold.5">
                  <Location />
                  {t.location}
                </Flex>
              </A>
            </Div>
          ))}
      </Grid>
      <Div height="280px" bg="gray.6" />
    </>
  )
}

export default Team
