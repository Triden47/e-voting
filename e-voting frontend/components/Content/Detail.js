import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Detail = () => {
  return (
    <>
      <Heading>Poll Details</Heading>
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input placeholder="Title" />

        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Description" />
      </FormControl>
    </>
  );
};

export default Detail;
