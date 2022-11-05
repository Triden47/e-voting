import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  FieldArray,
  useFormik,
} from "formik";
import { Button, Input } from "@chakra-ui/react";

import SimpleSidebar from "../components/Create_Page/Sidebar";

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
  )
}
// const create = () => {
//   const formik = useFormik({
//     initialValues: {
//       title: "",
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={async (values) => {
//           await new Promise((r) => setTimeout(r, 500));
//           alert(JSON.stringify(values, null, 2));
//         }}
//       >
//         {({ values }) => (
//           <Form>
//             <label htmlFor="title">Poll Title</label>
//             <Field
//               as={Input}
//               id="title"
//               name="title"
//               type="text"
//             />

//             <FieldArray name="candidates">
//               {({ insert, remove, push }) => (
//                 <div>
//                   {values.candidates.length > 0 &&
//                     values.candidates.map((candidate, index) => (
//                       <div className="row" key={index}>
//                         <label>Candidate {index + 1}</label>
//                         <div className="col">
//                           <label htmlFor={`candidates.${index}.name`}>Name</label>
//                           <Field
//                             as={Input}
//                             name={`candidates.${index}.name`}
//                             placeholder="Jane Doe"
//                             type="text"
//                           />
//                           <ErrorMessage
//                             name={`candidates.${index}.name`}
//                             component="div"
//                             className="field-error"
//                           />
//                         </div>
//                         <div className="col">
//                           <label htmlFor={`candidates.${index}.email`}>
//                             Email
//                           </label>
//                           <Field
//                             as={Input}
//                             name={`candidates.${index}.email`}
//                             placeholder="jane@acme.com"
//                             type="email"
//                           />
//                           <ErrorMessage
//                             name={`candidates.${index}.email`}
//                             component="div"
//                             className="field-error"
//                           />
//                         </div>
//                         <div className="col">
//                           <Button
//                             type="button"
//                             onClick={() => remove(index)}
//                           >
//                             X
//                           </Button>
//                         </div>
//                       </div>
//                     ))}
//                   <Button
//                     type="button"
//                     onClick={() => push({ name: "", email: "" })}
//                   >
//                     Add candidate
//                   </Button>
//                 </div>
//               )}
//             </FieldArray>
//             <Button type="submit">Submit</Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

export default create;
