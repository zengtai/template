const React = require("react");

const headComponents = [
  <script
    key={`adsense`}
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9062459637265650"
  ></script>,
];

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(headComponents);
};
