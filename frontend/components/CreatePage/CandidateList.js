import CandidateCard from "./CandidateCard";

const CandidateList = ({ data }) => {
  return (
    <>
      {data.candidates.map((candidate) => (
        <div key={candidate._id}>
          <CandidateCard candidate={candidate} />
        </div>
      ))}
    </>
  );
};

export default CandidateList;
