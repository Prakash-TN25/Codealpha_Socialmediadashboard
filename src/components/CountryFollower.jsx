/* eslint-disable react/prop-types */

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "Sri Lanka", color: "rgb(230,33,23)" },
  { value: 10, label: "America", color: "rgb(255,33,23)" },
  { value: 13, label: "Japan", color: "rgb(175,33,23)" },
  { value: 20, label: "China", color: "rgb(100,33,23)" },
];

const size = {
  width: 600,
  height: 400,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Subcriber</PieCenterLabel>
      </PieChart>
    </>
  );
}
