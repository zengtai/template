import * as React from "react";
import Layout from "../components/Layout";
import List from "../components/List";
import { data } from "../../data/games";
import Banner from "../components/Banner";
import { IconNew, IconFire } from "../components/Icons";

const IndexPage = () => {
  console.log(data);

  return (
    <Layout>
      <Banner />
      <h2 className="mx-4 mt-4 mb-2 flex font-bold text-cyan-600">
        <IconNew className="text-lime-500" />
        <span>Latest</span>
      </h2>
      <List items={data.slice(0, 3)} />
      <h2 className="mx-4 mt-4 mb-2 flex font-bold text-cyan-600">
        <IconFire className="text-red-500" />
        <span>Popular</span>
      </h2>
      <List items={data.slice(3, 12)} />
      <div className="my-4">
        <Banner />
      </div>
      <List items={data.slice(12, 21)} />
    </Layout>
  );
};
export const Head = () => <title>Home Page</title>;
export default IndexPage;
