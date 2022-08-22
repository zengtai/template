import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { IconArrowRight } from "../components/Icons";
import { data } from "../../data/games";

const AboutPage = () => {
  console.log(data);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 px-4 py-12 text-center text-white">
        <h1 className="text-xl font-bold drop-shadow">Site Name</h1>
        <p className="text-sm drop-shadow">Play Free Games Online</p>
      </div>
      <ul className="m-4 grid gap-2">
        <li>
          <Link
            className="flex items-center justify-between rounded-lg border bg-white p-3"
            to={`/`}
          >
            <span>Privacy Policy</span>
            <IconArrowRight className={`text-gray-400`} />
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center justify-between rounded-lg  border bg-white p-3"
            to={`/`}
          >
            <span>Terms of Use</span>
            <IconArrowRight className={`text-gray-400`} />
          </Link>
        </li>
      </ul>
    </Layout>
  );
};
export const Head = () => <title>About</title>;
export default AboutPage;
