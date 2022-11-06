//Components
import { useEffect } from "react";
import CandidateCard from "./CandidateCard";

const VotingArea = ({ candidates }) => {
  return (
    <>
      {candidates.map((candidate) => (
        <div key={candidate._id}>
          <CandidateCard candidate={candidate} />
        </div>
      ))}
    </>
  );
};

export default VotingArea;
