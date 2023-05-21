import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "../UI/Card/Card";

const ReactTab = () => {
  const [toys, setToys] = useState([]);
  const handleClick = (cat) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-jobayer98.vercel.app/toys?category=${cat}`
    )
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 4);
        setToys(sliceData);
      });
  };

  return (
    <>
      <Tabs className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-semibold my-8">Shop by category</h1>
        <TabList className="tab flex justify-center cursor-pointer">
          <Tab
            onClick={() => {
              handleClick("math");
            }}
            className="tab tab-lg  tab-lifted"
          >
            Math
          </Tab>
          <Tab
            onClick={() => {
              handleClick("physics");
            }}
            className="tab tab-lg  tab-lifted"
          >
            Physics
          </Tab>
          <Tab
            onClick={() => {
              handleClick("medical");
            }}
            className="tab tab-lg  tab-lifted"
          >
            Medical
          </Tab>
          <Tab
            onClick={() => {
              handleClick("engineering_kits");
            }}
            className="tab tab-lg  tab-lifted"
          >
            Engineering Kit
          </Tab>
        </TabList>

        <TabPanel className="p-4 flex gap-4">
          {toys.map((toy) => (
            <Card key={toy._id} toy={toy} />
          ))}
        </TabPanel>
        <TabPanel className="flex gap-4">
          {toys.map((toy) => (
            <Card key={toy._id} toy={toy} />
          ))}
        </TabPanel>
        <TabPanel className="flex gap-4">
          {toys.map((toy) => (
            <Card key={toy._id} toy={toy} />
          ))}
        </TabPanel>
        <TabPanel className="flex gap-4">
          {toys.map((toy) => (
            <Card key={toy._id} toy={toy} />
          ))}
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ReactTab;
