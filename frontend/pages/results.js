import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//components
import Result from "../components/Result/Result";
import { getCandidates } from "../api/api";

const Results = () => {
  const router = useRouter();
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    const someFunction = async () => {
      // console.log(router.query.id)
      setCandidates(await getCandidates({ id: router.query.id }));
    };
    someFunction();
  }, [router.isReady]);

  return (
    <>
      <Result candidates={candidates} />
    </>
  );
};

export default Results;
