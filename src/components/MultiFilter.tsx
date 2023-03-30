import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useAppDispatch } from "@/store/hooks";

interface IProps {
  options: string[];
  update: Function;
  title: string;
}
const MultiFilter = ({ options, update, title }: IProps) => {
  const dispatch = useAppDispatch();

  const setSelected = (selected: any[]) => {
    dispatch(update(selected));
  };
  return (
    <div className="cardContainer">
      <p className="text-secondary fs-5">{title}</p>
      <Typeahead
        id="position_dropdown"
        multiple
        defaultSelected={[]}
        onChange={setSelected}
        options={options}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MultiFilter;
