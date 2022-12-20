import React from "react";
import SelectCity from "../Features/SelectCity";

function Location() {
  return (
    <div className="flex-col">
      <div className="col-end">
        <button>X</button>
      </div>
      <div>
        <img src="" alt="" />
        <p>אנא ידע אותנו במיקומך</p>
        <SelectCity />
        <button>התחל בקניה</button>
      </div>
    </div>
  );
}

export default Location;
