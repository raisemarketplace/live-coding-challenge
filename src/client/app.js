// @flow
import React, { Component } from "react";
import fetchListings from "../server/fetchListings";
import styles from "./index.module.css";

class App extends Component<*, *> {
  render() {
    return (
      <div className={styles.app}>
        <h1>Live Coding Challenge</h1>
        <div className={styles.content}>
          <h2>Listings</h2>
          <h2>Cart</h2>
        </div>
      </div>
    );
  }
}

export default App;
