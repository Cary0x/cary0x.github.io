import React from "react";
import { useLocation } from "@docusaurus/router";
import DefaultLayout from "@theme-original/Layout"; // Import original layout

export default function Layout(props) {
  const location = useLocation();

  // Use the frontmatter flag to conditionally render header/footer
  const isPageWithNoHeaderFooter = location.pathname === "/tools/pengu";

  return (
    <div className={isPageWithNoHeaderFooter ? "no-header-footer" : ""}>
      <DefaultLayout {...props} />
    </div>
  );
}
