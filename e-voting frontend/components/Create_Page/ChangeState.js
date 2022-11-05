import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ChangeState = ({ data, setData }) => {
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
          <Button
            type="button"
            onClick={() =>
              setData((prevState) => ({
                ...prevState,
                state: "active",
              }))
            }
          >
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
          <Button
            type="button"
            onClick={() =>
              setData((prevState) => ({
                ...prevState,
                state: "finish",
              }))
            }
          >
            Finish Poll
          </Button>
        </div>
      )}

      {data.state === "finish" && (
        <div>
          <p>The poll has ended, results are available.</p>
        </div>
      )}
    </>
  );
};

export default ChangeState;
