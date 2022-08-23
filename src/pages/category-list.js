import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import {
  ActionIcon,
  CasualIcon,
  ShootingIcon,
  SportsIcon,
  StrategyIcon,
  DefenseIcon,
  PuzzleIcon,
  SimulationIcon,
  RacingIcon,
} from "../components/Icons";
import { data } from "../../data/games";
import Banner from "../components/Banner";
import List from "../components/List";
import { ADS_SLOT_ID } from "../lib/constants";

const CategoryListPage = () => {
  // console.log(data);

  return (
    <Layout>
      <h1 className="m-4 flex justify-center text-xl font-bold text-cyan-600">
        <span>Category List</span>
      </h1>
      <ul className="m-4 grid gap-2">
        <li>
          <Link
            className="flex justify-between rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <div className="flex items-center gap-1.5">
              <CasualIcon />
              <span>Casual</span>
            </div>
            <div className="flex items-center gap-x-2">
              <ul className="flex -space-x-1">
                {data
                  .filter((item) => item.category.name === "Casual")
                  .slice(0, 3)
                  .map((item) => (
                    <li key={`${item.gid}-${Math.random()}`}>
                      <img
                        className="rounded-full border-2 border-white"
                        src={item.icon_url}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </li>
                  ))}
              </ul>
              <span className="text-xs">
                {data.filter((item) => item.category.name === "Casual").length}
                {"+"}
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <div className="flex items-center gap-1.5">
              <PuzzleIcon />
              <span>Puzzle</span>
            </div>
            <div className="flex items-center gap-x-2">
              <ul className="flex -space-x-1.5">
                {data
                  .filter((item) => item.category.name === "Puzzle")
                  .slice(0, 3)
                  .map((item) => (
                    <li key={item.gid}>
                      <img
                        className="rounded-full border-2 border-white"
                        src={item.icon_url}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </li>
                  ))}
              </ul>
              {data.filter((item) => item.category.name === "Puzzle").length >
              3 ? (
                <span className="text-xs">+</span>
              ) : null}
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-between rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <div className="flex items-center gap-1.5">
              <ActionIcon />
              <span>Action</span>
            </div>
            <div className="flex items-center gap-x-2">
              <ul className="flex -space-x-1.5">
                {data
                  .filter((item) => item.category.name === "Action")
                  .slice(0, 3)
                  .map((item) => (
                    <li key={item.gid}>
                      <img
                        className="rounded-full border-2 border-white"
                        src={item.icon_url}
                        alt={item.title}
                        width={24}
                        height={24}
                      />
                    </li>
                  ))}
              </ul>
              {data.filter((item) => item.category.name === "Action").length >
              3 ? (
                <span className="text-xs">
                  {
                    data.filter((item) => item.category.name === "Action")
                      .length
                  }
                  {`+`}
                </span>
              ) : null}
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <ShootingIcon />
            <span>Shooting</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <SportsIcon />
            <span>Sports</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <StrategyIcon />
            <span>Strategy</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <DefenseIcon />
            <span>Defense</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <SimulationIcon />
            <span>Simulation</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-1.5 rounded-lg border bg-white p-3"
            to={`/category`}
          >
            <RacingIcon />
            <span>Racing</span>
          </Link>
        </li>
      </ul>
      <div className="my-4">
        <Banner
          slot={ADS_SLOT_ID.category}
          format={`auto`}
          responsive={`true`}
          key={`category-list`}
        />
      </div>
      <h2 className="mx-4 my-2 p-2 text-center font-bold text-cyan-600">
        <span>- Most Played -</span>
      </h2>
      <List items={data.slice(0, 6)} />
    </Layout>
  );
};
export const Head = () => <title>Category</title>;
export default CategoryListPage;
