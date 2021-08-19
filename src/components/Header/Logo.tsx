import { Grid, Image } from "@chakra-ui/react"

export function Logo() {
  return (
    
    <Grid 
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumn="repeat(3,1fr)"
        justifyContent="center"
      >
       <Image
        w={["560px","1160px"]}
        src="/logo.svg"
        alt="worldtrip"
        justifySelf="center"
        gridColumn="2"
       />
      </Grid>
    
    
      
    
  );
}