import React from "react";

import NavBar from "../../Components/NavBar/NavBar";

const DesignPage = () => {
  return (
    <>
      {/* NavBar needs to be in individual view Component rather than App.js for mobile nav functionality */}
      <NavBar />
      <main>
        <div>This will be the design page</div>
      </main>
    </>
  );
};

export default DesignPage;
