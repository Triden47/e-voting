import { useState, useEffect, useContext } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from "@chakra-ui/react";

//components
import { getPolls } from "../api/api";
import Cards from "./Cards";
import { AdminContext } from "./context/AdminProvider";

const HomeTabs = ({ word }) => {
  const [polls, setPolls] = useState([]);
  const { admin } = useContext(AdminContext);

  useEffect(() => {
    const someFunction = async () => {
      setPolls(await getPolls());
    };
    someFunction();
  }, []);
  return (
    <Tabs>
      <Center>
        <TabList>
          {admin && <Tab>Inactive</Tab>}
          <Tab>Active</Tab>
          <Tab>Finished</Tab>
        </TabList>
      </Center>

      <TabPanels>
        {admin && (
          <TabPanel>
            <Cards
              word={word}
              polls={polls.filter((poll) => poll.state === "inactive")}
            />
          </TabPanel>
        )}
        <TabPanel>
          <Cards
            word={word}
            polls={polls.filter((poll) => poll.state === "active")}
          />
        </TabPanel>
        <TabPanel>
          <Cards
            word={word}
            polls={polls.filter((poll) => poll.state === "ended")}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default HomeTabs;
