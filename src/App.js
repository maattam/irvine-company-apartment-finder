import React, { Component } from "react";

import { Apartment } from "./components/Apartment";

const communities = [
  {
    name: "The Village at Irvine Spectrum",
    communityId: "81a376da-70ac-4ba8-8b2d-1ffe3c3d1afb"
  },
  {
    name: "Westview at Irvine Spectrum",
    communityId: "055e718e-d752-4d4c-997f-639492142356"
  }, {
    name: "Centerpointe at Irvine Spectrum",
    communityId: "3bf9f58a-d19e-424c-a86d-a1780edc4b68"
  }
];

class App extends Component {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.wrapper}>
          <div style={styles.list}>
            {communities.map(community => (
              <Apartment key={community.communityId} {...community} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 30
  },
  wrapper: {
    width: "80%",
    minWidth: 1000
  },
  list: {
    display: "flex",
    flexDirection: "column"
  }
};

export default App;
