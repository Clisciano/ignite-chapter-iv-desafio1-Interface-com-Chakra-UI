


import { Flex } from "@chakra-ui/layout";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="100"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="center"
    >
      <Flex mt="-3" w="90%" justify="center" align="center">
        <Logo />
      </Flex>
     
    </Flex>
    
  );
}