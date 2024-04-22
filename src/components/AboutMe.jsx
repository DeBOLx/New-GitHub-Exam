import { Box, Text } from "@chakra-ui/react";

function AboutMe() {
  return (
    <Box
      bg="gray"
      w="450px"
      h="150px"
      margin="auto"
      mt="-260px"
      mr="30px"
      borderRadius="md"
    >
      <Text fontSize="15px" as="i" align="center">
        Hi, My name is Olumide Lawal. I’m interested in working, collaborating
        and seeking opportunities in the Frontend Engineering industry. I’m
        looking to collaborate on projects, interships, create exciting stuff in
        the Frontend community. Send your mails here <a href="mailto:officialdebol@gmail.com">officialdebol@gmail.com</a> &
        find me [@DeBOLx] on all socials.
      </Text>
    </Box>
  );
}
export default AboutMe;
