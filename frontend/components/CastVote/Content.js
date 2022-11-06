import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//Components
import Registration from "./Registration";
import VotingArea from "./VotingArea";
import { getCandidates } from "../../api/api";

const Content = ({ item }) => {
  const router = useRouter();
  const [candidates, setCandidates] = useState([]);
  const [eligible, setEligible] = useState(false);
  useEffect(() => {
    const someFunction = async () => {
      setCandidates(await getCandidates({ id: router.query.pollPageId }));
    };
    someFunction();
  }, [router.isReady]);
  return (
    <>
      {item === "Voter Registration" && (
        <Registration poll_id={router.query.pollPageId} setEligible={setEligible} />
      )}
      {item === "Voting Area" && (
        <VotingArea
          candidates={candidates}
          eligible={eligible}
          setEligible={setEligible}
        />
      )}
    </>
  );
};

export default Content;
