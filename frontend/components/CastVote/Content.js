import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Components
import Registration from "./Registration";
import VotingArea from "./VotingArea";
import { getCandidates } from "../../api/api";

const Content = ({ item }) => {
  const router = useRouter();
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const someFunction = async () => {
      setCandidates(await getCandidates({ id: router.query.pollPageId }));
    };
    someFunction();
  }, [router.isReady]);
  return (
    <>
      {item === "Voter Registration" && <Registration />}
      {item === "Voting Area" && <VotingArea candidates={candidates} />}
    </>
  );
};

export default Content;
