import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOutMenu({ authenticate }) {
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => authenticate(true)}
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
}
