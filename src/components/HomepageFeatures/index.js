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
        Calculate an estimate for how many swaps you need to get up to 615
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
  {
    title: "Ethereum Badge Data",
    link: "/docs/info/ethbadges",
    description: <>View your badges in your Ethereum wallet.</>,
  },
];
const FeatureList4 = [
  {
    title: "Solana Chain Data",
    link: "/docs/info/scandata",
    description: <>Get links to your your historic on-chain Solana data.</>,
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
    <>
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
            {FeatureList4.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>

      <section
        className={styles.features}
        style={{ backgroundColor: "#2c2c2c" }}
      >
        <div className="container text--center">
          <h2>
            <a href="https://discord.com/invite/tG3j6P8Xce" target="_blank">
              Join the POND UNHINGED Discord Server!
            </a>
          </h2>
          <div style={{ maxWidth: "500px" }} className="text--left container ">
            <p>
              This is the unofficial Discord server for the Pond0x community.
              There are channels for everyone– knowledge sharing, development,
              assistance, speculation, games, prizes and everything in between.
            </p>
          </div>
          <a href="https://discord.com/invite/tG3j6P8Xce" target="_blank">
            <img src="/img/discord.png" alt="Description of the image" />
            <br />
            https://discord.com/invite/tG3j6P8Xce
          </a>
          <p>
            (Note: This is a public Discord server, so beware of scammers.
            <br />
            Do not click links. Do not accept unrequested DMs.
            <br />
            If you are unsure, submit a ticket first.)
          </p>
        </div>
      </section>
    </>
  );
}
