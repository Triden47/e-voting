import Detail from "./Detail";
import Add_Candidate from "./Add_Candidate";
import Change_State from "./Change_State";

const Content = ({ item }) => {
  return (
    <>
      {item === "Create" && <Detail />}
      {item === "Add Candidate" && <Add_Candidate />}
      {item === "Change State" && <Change_State />}
    </>
  );
};

export default Content;
