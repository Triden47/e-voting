import Detail from "./Detail";
import Add_Candidate from "./Add_Candidate";

const Content = ({ item }) => {
  return (
    <>
      {item === "Create" && <Detail />}
      {item === "Add Candidate" && <Add_Candidate />}
    </>
  );
};

export default Content;
