import React from "react";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import MiningStatusBar from "@site/src/components/MiningStatusBar";

const components = {
  "custom-MiningStatusBar": MiningStatusBar,
};

export default function NavbarItem(props) {
  const Component = components[props.type] || DefaultNavbarItem;
  return <Component {...props} />;
}
