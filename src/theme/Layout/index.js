import React from "react";
import { useLocation } from "@docusaurus/router";
import DefaultLayout from "@theme-original/Layout"; // Import original layout

const pathSet = new Set([
  "/tools/pengu",
  "/tools/example",
  "/status-mini",
  "/statuspro-mini",
]);

export default function Layout(props) {
  const location = useLocation();

  // Use the frontmatter flag to conditionally render header/footer
  const isPageWithNoHeaderFooter = pathSet.has(location.pathname);

  return (
    <div className={isPageWithNoHeaderFooter ? "no-header-footer" : ""}>
      <DefaultLayout {...props} />
    </div>
  );
}
