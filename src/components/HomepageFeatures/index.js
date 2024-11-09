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
        </div>
      </div>
    </section>
  );
}
