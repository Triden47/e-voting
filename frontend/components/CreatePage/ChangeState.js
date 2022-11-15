import { Button, useToast } from "@chakra-ui/react";

//Components
import { changePollState } from "../../api/api";

const ChangeState = ({ data, setData }) => {
  const toast = useToast();
  const handleClick = async (state) => {
    console.log(state);
    if ((await changePollState({ id: data._id, state: state })) !== "error") {
      toast({
        title: "State change successful",
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: "Error in changing state",
        status: "error",
        isClosable: true,
      });
    }
    setData((prevState) => ({
      ...prevState,
      state: state,
    }));
  };
  return (
    <>
      {data.state === "inactive" && (
        <div>
          <p>
            The poll is currently inactive, inorder to activate it add atleast
            two candidates, and click on the activate button below.
          </p>

          <p>
            Once the poll is active, voters can cast their votes. It will remain
            active until the admin ends the poll.
          </p>
          <Button type="button" onClick={() => handleClick("active")}>
            Activate Poll
          </Button>
        </div>
      )}
      {data.state === "active" && (
        <div>
          <p>
            The poll is now active, to end the poll click on the Finish button
            below.
          </p>

          <p>
            Once the poll ends, voters won't be able to cast their votes
            anymore. Results will be available.
          </p>
          <Button type="button" onClick={() => handleClick("ended")}>
            Finish Poll
          </Button>
        </div>
      )}

      {data.state === "ended" && (
        <div>
          <p>The poll has ended, results are available.</p>
        </div>
      )}
    </>
  );
};

export default ChangeState;
