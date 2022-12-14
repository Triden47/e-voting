import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

//Components
import { voteSubmit } from "../../api/api";

const CandidateCard = ({ candidate, eligible, setEligible }) => {
  const handleClick = async () => {
    setEligible(false);
    await voteSubmit({ id: candidate._id });
  };
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          {/* <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            px={3}
            color={'green.500'}
            rounded={'full'}>
            Hobby
          </Text> */}
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"}>{candidate.name}</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {candidate.organization}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {candidate.age}
            </ListItem>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              {candidate.qualification}
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"green.400"}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "green.500",
            }}
            _focus={{
              bg: "green.500",
            }}
            disabled={!eligible}
            onClick={handleClick}
          >
            {eligible ? "Vote me!!!" : "Not eligible"}
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default CandidateCard;
