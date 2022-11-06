import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

//Components
import { addCandidate } from "../../api/api";

const AddCandidate = ({ data, setData }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      organization: "",
      age: "",
      qualification: "",
    },
    onSubmit: async (values) => {
      await addCandidate({ ...values, poll_id: data._id });
      setData((prevState) => ({
        ...prevState,
        candidates: [
          ...(prevState.candidates ? prevState.candidates : []),
          values,
        ],
      }));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Heading>Candidate Details</Heading>
      <fieldset disabled={data.state === "inactive" ? "" : "disabled"}>
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

            <FormLabel>Organization</FormLabel>
            <Input
              id="organization"
              name="organization"
              placeholder="Organization"
              onChange={formik.handleChange}
              value={formik.values.organization}
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
      </fieldset>
    </>
  );
};

export default AddCandidate;
