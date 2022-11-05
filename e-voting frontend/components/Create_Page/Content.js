import { useEffect, useState } from "react";

import Detail from "./Detail";
import Add_Candidate from "./Add_Candidate";
import Change_State from "./Change_State";

const Content = ({ item }) => {
  const [data, setData] = useState({
    title: "",
    description: "",
    candidates: [],
    state: "inactive",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {item === "Create" && <Detail data={data} setData={setData} />}
      {item === "Add Candidate" && <Add_Candidate setData={setData} />}
      {item === "Change State" && (
        <Change_State data={data} setData={setData} />
      )}
    </>
  );
};

export default Content;
