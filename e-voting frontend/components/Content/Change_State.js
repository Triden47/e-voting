import { Button } from "@chakra-ui/react";
import { useState } from "react";

const Change_State = () => {
  const [currentState, setCurrentState] = useState("inactive");
  return (
    <>
      {currentState === "inactive" && (
        <div>
          <p>
            The poll is currently inactive, inorder to activate it add atleast
            two candidates, and click on the activate button below.
          </p>

          <p>
            Once the poll is active, voters can cast their votes. It will remain
            active until the admin ends the poll.
          </p>
          <Button type="button" onClick={() => setCurrentState("active")}>
            Activate Poll
          </Button>
        </div>
      )}
      {currentState === "active" && (
        <div>
          <p>
            The poll is now active, to end the poll click on the Finish button below.
          </p>

          <p>
            Once the poll ends, voters won't be able to cast their votes anymore. Results will be available.
          </p>
          <Button type="button" onClick={() => setCurrentState("finish")}>
            Finish Poll
          </Button>
        </div>
      )}

      {currentState === "finish" && (
        <div>
          <p>
            The poll has ended, results are available.
          </p>
        </div>
      )}
    </>
  );
};

export default Change_State;
