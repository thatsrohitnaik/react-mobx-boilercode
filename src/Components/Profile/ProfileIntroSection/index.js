import React from "react";
import { observer } from "mobx-react";
import { getRequest } from "../../../Utility/rest";

@observer
class ProfileIntroSection extends React.Component {
  render() {
    getRequest("https://jsonkeeper.com/b/CDUT");
    return (
      <>
        <p>ProfileIntroSection</p>
      </>
    );
  }
}

export default ProfileIntroSection;
