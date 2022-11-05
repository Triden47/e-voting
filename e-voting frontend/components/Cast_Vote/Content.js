import Registration from "./Registration";
import Voting_Area from "./Voting_Area";

const Content = ({ item }) => {
  return (
    <>
      {item === "Voter Registration" && <Registration />}
      {item === "Voting Area" && <Voting_Area />}
    </>
  );
};

export default Content;
