import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { ADS_ID } from "../lib/constants";

export default function Banner({
  className,
  style,
  layout,
  format,
  client = ADS_ID,
  slot,
  responsive,
  layoutKey,
}) {
  React.useEffect(() => {
    try {
      (window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e.message);
    }
  }, []);

  return (
    <div className={className ? `banner ${className}` : `banner`}>
      <div className="text-center text-xs uppercase text-cyan-600">
        <span className="inline-block scale-90">Advertisement</span>
      </div>
      <ins
        className="adsbygoogle grid place-content-center bg-black/5"
        style={style}
        data-ad-layout={layout}
        data-ad-format={format}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-layout-key={layoutKey}
        data-full-width-responsive={responsive}
        data-adtest="on"
      >
        <StaticImage
          className="ad-placeholder"
          src="../images/300x250.png"
          alt="AD"
          width={300}
          height={250}
        />
      </ins>
    </div>
  );
}
