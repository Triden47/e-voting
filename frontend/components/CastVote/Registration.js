import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

//Components
import { registerVoter } from "../../api/api";

const Registration = ({ poll_id, setEligible }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: async (values) => {
      setEligible(await registerVoter({ ...values, poll_id: poll_id }));
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Heading>Voter Details</Heading>
      <fieldset>
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

            <FormLabel>Email</FormLabel>
            <Input
              id="email"
              name="email"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </fieldset>
    </>
  );
};

export default Registration;
