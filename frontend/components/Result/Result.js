
//Components
import CandidateCard from "./CandidateCard";

const Result = ({ candidates }) => {
  console.log("Candidates: " + candidates);
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

export default Result;
