import * as React from "react";
import Layout from "../components/Layout";
import List from "../components/List";
import { data } from "../../data/games";
import Banner from "../components/Banner";
import { IconNew, IconFire } from "../components/Icons";
import { ADS_SLOT_ID } from "../lib/constants";

const IndexPage = () => {
  const [randomData, setRandomData] = React.useState(data);
  // console.log(data);
  React.useEffect(() => {
    randomData.sort(() => 0.5 - Math.random());
    setRandomData(randomData);
  }, [randomData]);

  return (
    <Layout>
      <Banner
        slot={ADS_SLOT_ID.home}
        format={`auto`}
        responsive={`true`}
        key={`home-pos-1`}
      />
      <h2 className="mx-4 mt-4 mb-2 flex font-bold text-cyan-600">
        <IconNew className="text-lime-500" />
        <span>Latest</span>
      </h2>
      <List items={randomData.slice(0, 3)} />
      <h2 className="mx-4 mt-4 mb-2 flex font-bold text-cyan-600">
        <IconFire className="text-red-500" />
        <span>Popular</span>
      </h2>
      <List items={randomData.slice(3, 12)} />
      <div className="my-4">
        <Banner
          slot={ADS_SLOT_ID.home}
          format={`auto`}
          responsive={`true`}
          key={`home-pos-2`}
        />
      </div>
      <List items={randomData.slice(12, 21)} />
    </Layout>
  );
};
export const Head = () => <title>Home Page</title>;
export default IndexPage;
