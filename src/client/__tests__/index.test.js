import React from "react";
import ReactTestRenderer from "react-test-renderer";

import App from "../app";

describe("App", () => {
  test("should be a valid React Element", () => {
    expect(React.isValidElement(<App />)).toBeTruthy();
  });

  test("should render without throwing an error", () => {
    expect(() => ReactTestRenderer.create(<App />)).not.toThrow();
  });
});

describe("App snapshots", () => {
  test("matches the default snapshot", () => {
    const tree = ReactTestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
