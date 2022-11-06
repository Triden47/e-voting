import CandidateCard from "./CandidateCard";

const CandidateList = ({ data }) => {
  return (
    <>
      {data.candidates.map((candidate) => (
        <>
          <CandidateCard candidate={candidate} />
        </>
      ))}
    </>
  );
};

export default CandidateList;
