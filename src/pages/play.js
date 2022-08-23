import { Link } from "gatsby";
import * as React from "react";
import { data } from "../../data/games";
import Banner from "../components/Banner";
import List from "../components/List";
import { ADS_SLOT_ID } from "../lib/constants";
import Layout from "../components/Layout";

const Play = () => {
  // console.log(data);
  const filteredData = data.find((item) => (item.gid = "CrayonPop"));
  return (
    <Layout>
      <div className="relative overflow-hidden bg-black/20 xl:mx-auto xl:max-w-3xl">
        <div className="relative z-10 my-4 flex flex-col items-center">
          <img
            className="mx-auto h-32 w-32 rounded-lg"
            src={filteredData.icon_url}
            alt={filteredData.title}
            width={200}
            height={200}
          />
          <h1 className="my-2 font-bold text-white drop-shadow">
            <span>{`Play ${filteredData.title}`}</span>
          </h1>
          <div className="mb-2">
            <Link
              className="rounded-md bg-lime-500 p-1 text-xs uppercase text-white shadow"
              to={`/category`}
            >
              Casual
            </Link>
          </div>

          <Banner
            className={`mt-4`}
            style={{ width: `320px` }}
            slot={ADS_SLOT_ID.detail}
            format={`auto`}
            responsive={`false`}
            key={`game-${Math.random()}`}
          />

          <div className="mt-4">
            <a
              className="block rounded-lg bg-sky-500 px-6 py-4 font-bold text-white shadow-md shadow-sky-400/50"
              href={filteredData.game_url}
              title={`Play ${filteredData.title} Now`}
            >
              Play Now
            </a>
          </div>
        </div>
        <img
          className="absolute inset-0 z-0 h-full w-full object-contain opacity-50 blur-2xl"
          src={filteredData.icon_url}
          alt={filteredData.title}
        />
      </div>
      <div className="m-4 text-sm">
        <h3 className="my-2 font-bold text-gray-600">Description</h3>
        <div>{filteredData.description}</div>
      </div>
      <h2 className="mx-4 my-2 p-2 text-center font-bold text-cyan-600">
        <span>- Most Played -</span>
      </h2>
      <List items={data.slice(0, 6)} />
      <Banner
        className={`my-4 flex flex-col items-center`}
        style={{ width: `320px` }}
        slot={ADS_SLOT_ID.detail}
        format={`auto`}
        responsive={`false`}
        key={`game-${Math.random()}`}
      />
      <List items={data.slice(6, 12)} />
    </Layout>
  );
};
export const Head = () => <title>Play Game</title>;
export default Play;