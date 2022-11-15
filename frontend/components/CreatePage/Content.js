import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Components
import Detail from "./Detail";
import AddCandidate from "./AddCandidate";
import CandidateList from "./CandidateList";
import ChangeState from "./ChangeState";
import { getCandidates, getPollById } from "../../api/api";

const Content = ({ item }) => {
  const router = useRouter();
  const [data, setData] = useState({
    _id: "",
    title: "",
    description: "",
    candidates: [],
    state: "inactive",
  });

  useEffect(() => {
    const someFunction = async () => {
      if(!router.query.id)
        return

      let pollData = await getPollById({ id: router.query.id });
      const candidates = await getCandidates({ id: router.query.id });
      setData({ ...pollData, candidates: candidates });
    };
    someFunction();
  }, [router.isReady]);

  // useEffect(() => {
  //   console.log(data)
  // }, [data])
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
