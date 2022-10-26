import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const Add_Candidate = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      party: "",
      age: "",
      qualification: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Heading>Candidate Details</Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />

          <FormLabel>Party/Organization</FormLabel>
          <Input
            id="party"
            name="party"
            placeholder="Party"
            onChange={formik.handleChange}
            value={formik.values.party}
          />

          <FormLabel>Age</FormLabel>
          <Input
            id="age"
            name="age"
            placeholder="Age"
            onChange={formik.handleChange}
            value={formik.values.age}
          />

          <FormLabel>Qualification</FormLabel>
          <Input
            id="qualification"
            name="qualification"
            placeholder="Qualification"
            onChange={formik.handleChange}
            value={formik.values.qualification}
          />

          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
    </>
  );
};

export default Add_Candidate;