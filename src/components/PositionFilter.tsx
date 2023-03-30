import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { position } from "@/data/filters";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useAppDispatch } from "@/store/hooks";
import { changePosition } from "@/store/filterSlice";
const PositionFilter = () => {
  const dispatch = useAppDispatch();

  const setSelectedPosition = (selected: any[]) => {
    dispatch(changePosition(selected));
  };
  return (
    <div className="cardContainer">
      <p className="text-secondary fs-5">Pozisyon</p>
      <Typeahead
        id="position_dropdown"
        multiple
        defaultSelected={[]}
        onChange={setSelectedPosition}
        options={position}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default PositionFilter;
