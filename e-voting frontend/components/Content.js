import {
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Content = ({ item }) => {
  return (
    <>
      {item == "Title" && (
        <div>
          <Heading>Poll Details</Heading>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input placeholder="Title" />

            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Description" />
          </FormControl>
        </div>
      )}
      {item == "Add Candidate" && (
        <div>
          <Heading>Candidate Details</Heading>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Name" />

            <FormLabel>Party/Organization</FormLabel>
            <Input placeholder="Party" />

            <FormLabel>Age</FormLabel>
            <Input placeholder="Age" />

            <FormLabel>Qualification</FormLabel>
            <Input placeholder="Qualification" />
          </FormControl>
        </div>
      )}
    </>
  );
};

export default Content;
