import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Guides",
    link: "/docs/guides",
    description: (
      <>
        Explore in-depth guides covering every aspect of the Pond0x ecosystem.
        From setup to advanced usage, find clear instructions and insights to
        navigate the platform with confidence.
      </>
    ),
  },
  {
    title: "Issues",
    link: "/docs/issues",
    description: (
      <>
        Stay updated on known issues and solutions, with practical
        troubleshooting advice. Discover workarounds and detailed explanations
        for technical challenges within the community.
      </>
    ),
  },
  {
    title: "Community",
    link: "/community",
    description: (
      <>
        Connect with the community, follow along on social media, or reach out
        directly. Stay informed, offer feedback, and join in supporting a
        positive, knowledgeable space for Pond0x users.
      </>
    ),
  },
];
const FeatureList2 = [
  {
    title: "Dashboard",
    link: "/dashboard",
    description: (
      <>
        Explore the last 48 hours of mining history and the aggregated data of
        mining history since Nov 11.
      </>
    ),
  },
  {
    title: "Manifest Data",
    link: "/docs/info/manifest",
    description: <>Read your manifest data– Swaps, Pro status, etc.</>,
  },
  {
    title: "Swap/Boost Data",
    link: "/docs/info/swaps",
    description: (
      <>
        Calculate an estimate for how many swaps you need to get up to 515
        boost.
      </>
    ),
  },
];
const FeatureList3 = [
  {
    title: "Luck Data",
    link: "/docs/info/luck",
    description: (
      <>
        View your Luck data and definitions for why it is at the current value.
      </>
    ),
  },
  {
    title: "Mining Health Data",
    link: "/docs/info/health",
    description: (
      <>
        View your Mining Rig Health data and definitions for the current values.
      </>
    ),
  },
];

function Feature({ link, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Heading as="h3">{title}</Heading>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container features">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          {FeatureList3.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
