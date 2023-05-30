import React from "react";
import { Card, Text, Metric } from "@tremor/react";

const Test = () => {
  return (
    <Card className="max-w-xs mx-auto">
      <Text>Sales</Text>
      <Metric>$ 34,743</Metric>
    </Card>
  );
};

export default Test;
