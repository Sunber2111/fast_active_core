import React from "react";
import { Input } from "antd";
import fastActiveStreamEvent from "../../event/fastactive.event";
const FastActiveFilterBar = () => {
  return (
    <Input
      placeholder="Tên học viên"
      onChange={(e) => fastActiveStreamEvent.onNameChange(e.target.value)}
    />
  );
};

export default FastActiveFilterBar;
