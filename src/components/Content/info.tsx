import { Flex, Heading, Text, Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Icon } from "@chakra-ui/react";
import React from "react";
import { RiInformationLine } from "react-icons/ri";

export default function Info() {
  return (
    <Flex
      align="center"
      justify="space-between"
    >
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="500"
        >
          50
        </Heading>
        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="yellow.700"
        >países</Text>
      </Flex>
      <Flex
        direction="column"
        justify="space-between"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="500"
        >
          60
        </Heading>
        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="yellow.700"
        >
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        align={["flex-start", "flex-start", "center"]}
      >
        <Heading
          fontSize={["2xl", "5xl"]}
          color="yellow.500"
          fontWeight="500"
        >
          27
        </Heading>
        <Text
          fontWeight="500"
          fontSize={["md", "xl"]}
          color="yellow.700"
        >
          cidades +100
          <Popover>
          <PopoverTrigger>
            <span>
              <Icon 
                cursor="pointer"
                as={RiInformationLine}
                ml="1"
                color="gray.400"
                w={["10px","16px"]}
                h={["10px","16px"]}
              />
            </span>           
          </PopoverTrigger>
          <PopoverContent bg="gray.400">
            <PopoverArrow bg="gray.700"/>
            <PopoverCloseButton />
            <PopoverHeader align="center">
              Cidades Européias
            </PopoverHeader>
            <PopoverBody fontWeight="400" fontSize="lg">
              Londres, París, Roma, Berlim, Madrid, Atenas, Lisboa
            </PopoverBody>
          </PopoverContent>
        </Popover>
        </Text>        
      </Flex>
    </Flex>
  )
}