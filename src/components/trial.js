import React from "react";
import { Link } from "@mui/material";

function trial() {
  return (
    <div>
      <Link onClick={() => window.open("https://github.com")}>Git Hub</Link>
    </div>
  );
}

export default trial;
