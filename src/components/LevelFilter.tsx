import React from "react";
import dynamic from "next/dynamic";
import { Checkbox } from "@nextui-org/react";
import { changeLevel, useFilters } from "@/store/filterSlice";
import { useAppDispatch } from "@/store/hooks";

const LevelFilter = () => {
  const dispatch = useAppDispatch();
  const { level: selectedLevel } = useFilters();

  const setSelectedLevel = (value: string[]) => {
    dispatch(changeLevel(value));
  };
  return (
    <div className="cardContainer">
      <Checkbox.Group
        color="secondary"
        defaultValue={["buenos-aires"]}
        orientation="horizontal"
        label="Tecrübe Seçiniz"
        labelColor="secondary"
        value={selectedLevel}
        onChange={setSelectedLevel}
      >
        <Checkbox value="Junior">Junior</Checkbox>
        <Checkbox value="Middle">Middle</Checkbox>
        <Checkbox value="Senior">Senior</Checkbox>
      </Checkbox.Group>
    </div>
  );
};

// export default LevelFilter;
export default dynamic(() => Promise.resolve(LevelFilter), { ssr: false });
