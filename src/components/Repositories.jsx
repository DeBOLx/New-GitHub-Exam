import { Box, Text, Button, Heading, HStack } from "@chakra-ui/react";


function Repositories() {
  return (
    <>
      <Heading as="h5" fontSize="20px" fontWeight="500" ml="545px" mt="23px">
        Repositories
      </Heading>
      <HStack spacing="15px">
        <Box
          bg="gray"
          w="220px"
          h="100px"
          ml="545px"
          mt="23px"
          borderRadius="5px"
          align="center"
        >
          <Text>DeBOLx</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
        <Box
          bg="gray"
          w="220px"
          h="100px"
          align="center"
          mt="23px"
          borderRadius="5px"
        >
          <Text>Notepad-shenanigans</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
      </HStack>
      <HStack spacing="15px">
        <Box
          bg="gray"
          w="220px"
          h="100px"
          ml="545px"
          mt="23px"
          borderRadius="5px"
          align="center"
        >
          <Text>Brief-bio-with-HTML-CSS</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
        <Box
          align="center"
          bg="gray"
          w="220px"
          h="100px"
          mt="23px"
          borderRadius="5px"
        >
          <Text>Assignment-One</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
      </HStack>

      <HStack spacing="15px">
        <Box
          bg="gray"
          w="220px"
          h="100px"
          ml="545px"
          mt="23px"
          borderRadius="5px"
          align="center"
        >
          <Text>Assignment-Two</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
        <Box
          align="center"
          bg="gray"
          w="220px"
          h="100px"
          mt="23px"
          borderRadius="5px"
        >
          <Text>Assignment-Three</Text>
          <Button w="50px" mt="25px">
            <Text fontWeight={100}>View</Text>
          </Button>
        </Box>
      </HStack>
    </>
  );
}

export default Repositories;
