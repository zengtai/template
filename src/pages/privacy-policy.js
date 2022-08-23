import * as React from "react";
import Layout from "../components/Layout";
import { SITE_META } from "../lib/constants";
export default function Privacy() {
  return (
    <Layout>
      <div className="p-4 text-sm text-slate-500 xl:mx-auto xl:w-[1120px]">
        <h1 className="m-4 flex justify-center text-xl font-bold text-cyan-600">
          {SITE_META.name} Privacy Policy
        </h1>
        <p className="my-2">
          At {SITE_META.name}, accessible from {SITE_META.url}, one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by {SITE_META.name} and how we use it.
        </p>
        <p className="my-2">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <p className="my-2">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in {SITE_META.name}. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
        <h2 className="text-md my-3 font-bold">Consent</h2>
        <p className="my-2">
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
        <h2 className="text-md my-3 font-bold">Information we collect</h2>
        <p className="my-2">
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <p className="my-2">
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p className="my-2">
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>
        <h2 className="text-md my-3 font-bold">How we use your information</h2>
        <p className="my-2">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="my-2 ml-4 list-outside list-disc">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        <h2 className="text-md my-3 font-bold">Log Files</h2>
        <p className="my-2">
          {SITE_META.name} follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services’ analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users’ movement on the website, and
          gathering demographic information.
        </p>
        <h2 className="text-md my-3 font-bold">Cookies and Web Beacons</h2>
        <p className="my-2">
          Like any other website, {SITE_META.name} uses ‘cookies’. These cookies
          are used to store information including visitors’ preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users’ experience by customizing
          our web page content based on visitors’ browser type and/or other
          information.
        </p>
        <p className="my-2">
          For more general information on cookies, please read{" "}
          <a href="https://www.privacypolicyonline.com/what-are-cookies/">
            “What Are Cookies”
          </a>
          .
        </p>
        <h2 className="text-md my-3 font-bold">
          Google DoubleClick DART Cookie
        </h2>
        <p className="my-2">
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{" "}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>
        <h2 className="text-md my-3 font-bold">
          Advertising Partners Privacy Policies
        </h2>
        <p className="my-2">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of {SITE_META.name}.
        </p>
        <p className="my-2">
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on {SITE_META.name}, which are
          sent directly to users’ browser. They automatically receive your IP
          address when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </p>
        <p className="my-2">
          Note that {SITE_META.name} has no access to or control over these
          cookies that are used by third-party advertisers.
        </p>
        <h2 className="text-md my-3 font-bold">Third Party Privacy Policies</h2>
        <p className="my-2">
          {SITE_META.name}’s Privacy Policy does not apply to other advertisers
          or websites. Thus, we are advising you to consult the respective
          Privacy Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.
        </p>
        <p className="my-2">
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers’
          respective websites.
        </p>
        <h2 className="text-md my-3 font-bold">
          CCPA Privacy Rights (Do Not Sell My Personal Information)
        </h2>
        <p className="my-2">
          Under the CCPA, among other rights, California consumers have the
          right to:
        </p>
        <p className="my-2">
          Request that a business that collects a consumer’s personal data
          disclose the categories and specific pieces of personal data that a
          business has collected about consumers.
        </p>
        <p className="my-2">
          Request that a business delete any personal data about the consumer
          that a business has collected.
        </p>
        <p className="my-2">
          Request that a business that sells a consumer’s personal data, not
          sell the consumer’s personal data.
        </p>
        <p className="my-2">
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
        <h2 className="text-md my-3 font-bold">GDPR Data Protection Rights</h2>
        <p className="my-2">
          We would like to make sure you are fully aware of all of your data
          protection rights. Every user is entitled to the following:
        </p>
        <p className="my-2">
          The right to access – You have the right to request copies of your
          personal data. We may charge you a small fee for this service.
        </p>
        <p className="my-2">
          The right to rectification – You have the right to request that we
          correct any information you believe is inaccurate. You also have the
          right to request that we complete the information you believe is
          incomplete.
        </p>
        <p className="my-2">
          The right to erasure – You have the right to request that we erase
          your personal data, under certain conditions.
        </p>
        <p className="my-2">
          The right to restrict processing – You have the right to request that
          we restrict the processing of your personal data, under certain
          conditions.
        </p>
        <p className="my-2">
          The right to object to processing – You have the right to object to
          our processing of your personal data, under certain conditions.
        </p>
        <p className="my-2">
          The right to data portability – You have the right to request that we
          transfer the data that we have collected to another organization, or
          directly to you, under certain conditions.
        </p>
        <p className="my-2">
          If you make a request, we have one month to respond to you. If you
          would like to exercise any of these rights, please contact us.
        </p>
        <h2 className="text-md my-3 font-bold">Children’s Information</h2>
        <p className="my-2">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p className="my-2">
          {SITE_META.name} does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </p>
      </div>
    </Layout>
  );
}
