import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import { Button, Input } from "@chakra-ui/react";
import { useEffect } from "react";

//Commponents
import SimpleSidebar from "../components/CreatePage/Sidebar";

const initialValues = {
  title: "",
  candidates: [
    {
      name: "",
      email: "",
    },
  ],
};

const create = () => {
  return (
    <div>
      <SimpleSidebar />
    </div>
  );
};

export default create;
