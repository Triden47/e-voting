import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";

//Components
import { createPoll } from "../../api/api";

const Detail = ({ data, setData }) => {
  const formik = useFormik({
    initialValues: {
      title: data.title,
      description: data.description,
    },
    onSubmit: async (values) => {
      const id = await createPoll(values);
      setData((prevState) => ({
        ...prevState,
        _id: id,
        title: values.title,
        description: values.description,
      }));

      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Heading>Poll Details</Heading>
      <fieldset disabled={data.state === "inactive" ? "" : "disabled"}>
        <form onSubmit={formik.handleSubmit} disabled>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              id="title"
              name="title"
              placeholder="Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            <FormLabel>Description</FormLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </fieldset>
    </>
  );
};

export default Detail;
