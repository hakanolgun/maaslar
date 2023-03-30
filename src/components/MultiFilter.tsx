import React from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useAppDispatch } from "@/store/hooks";
import { useFilters } from "@/store/filterSlice";

interface IProps {
  options: string[];
  update: Function;
  title: string;
  name: string;
}
const MultiFilter = ({ options, update, title, name }: IProps) => {
  const dispatch = useAppDispatch();
  const filters: any = useFilters();

  const setSelected = (selected: any[]) => {
    dispatch(update(selected));
  };

  return (
    <div className="cardContainer">
      <p className="text-secondary fs-5">{title}</p>
      <Typeahead
        id="position_dropdown"
        multiple
        selected={filters[name]}
        onChange={setSelected}
        options={options}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default MultiFilter;
