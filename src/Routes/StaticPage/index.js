import React from "react";
import CommonPage from "./CommonPage";
import Store from "../../Utility/ContextStore.js/contextAPI";

function StaticPage() {
  return (
    <>
      <Store>
        <CommonPage />
      </Store>
    </>
  );
}

export default StaticPage;
