"use client";
import {
  Card,
  DonutChart,
  Flex,
  ProgressBar,
  Text,
  Title,
} from "@tremor/react";
import React from "react";

const cities = [
  {
    name: "Foods",
    sales: 120,
  },
  {
    name: "Tools",
    sales: 220,
  },
];
const valueFormatter = (number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

const Summary = () => {
  const [value, setValue] = React.useState(null);

  return (
    <Card className="mx-auto">
      <Title>Daily Cost</Title>
      <DonutChart
        className="mt-6"
        data={cities}
        category="sales"
        index="name"
        colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
        onValueChange={(v) => setValue(v)}
      />

      <Card className="max-w-sm mx-auto">
        <Flex>
          <Text>$ 9,012 &bull; 45%</Text>
          <Text>$ 20,000</Text>
        </Flex>
        <ProgressBar value={45} color="teal" className="mt-3" />
      </Card>
    </Card>
  );
};

export default Summary;
