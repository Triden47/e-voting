//Components
import { useEffect } from "react";
import CandidateCard from "./CandidateCard";

const VotingArea = ({ candidates, eligible, setEligible }) => {
  return (
    <>
      {candidates.map((candidate) => (
        <div key={candidate._id}>
          <CandidateCard
            candidate={candidate}
            eligible={eligible}
            setEligible={setEligible}
          />
        </div>
      ))}
    </>
  );
};

export default VotingArea;
