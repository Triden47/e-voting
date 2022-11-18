import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useContext } from "react";

//Components
import { AdminContext } from "./context/AdminProvider";

const SimpleCard = ({ onClose }) => {
  const { setAdmin } = useContext(AdminContext);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (
        values.username === process.env.username &&
        values.password === process.env.password
      ) {
        setAdmin(true);
        onClose();
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      minH={"50vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Admin login</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />

                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </FormControl>
            </Stack>

            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SimpleCard;
