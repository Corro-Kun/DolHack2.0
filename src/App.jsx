import React from "react";
import Router from "./routers/router";
import { Toaster } from "sonner";

function App(){
  return(
    <>
      <Router />
      <Toaster
        toastOptions={{style:{backgroundColor: "var(--BG2_color)",color: "var(--Text_Color)", boxShadow: "0 0 20px #0c0c0c"}}}
      />
    </>
  );
}

export default App