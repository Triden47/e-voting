import { useEffect, useState } from "react";

import Detail from "./Detail";
import AddCandidate from "./AddCandidate";
import CandidateList from "./CandidateList";
import ChangeState from "./ChangeState";

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
      {item === "Add Candidate" && (
        <AddCandidate data={data} setData={setData} />
      )}
      {item === "Candidate List" && <CandidateList data={data} />}
      {item === "Change State" && <ChangeState data={data} setData={setData} />}
    </>
  );
};

export default Content;
