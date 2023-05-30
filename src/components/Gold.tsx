"use client";
import {
  Card,
  Metric,
  Text,
  AreaChart,
  BadgeDelta,
  Flex,
  DeltaType,
  Grid,
} from "@tremor/react";

const data = [
  {
    Month: "Jan 21",
    Gold: 2890,
    Silver: 2400,
  },
  {
    Month: "Feb 21",
    Gold: 1890,
    Silver: 1398,
  },
  // ...
  {
    Month: "Jul 21",
    Gold: 3490,
    Silver: 4300,
  },
];

const categories: {
  title: string;
  metric: string;
  metricPrev: string;
  delta: string;
  deltaType: DeltaType;
}[] = [
  {
    title: "Gold",
    metric: "$ 12,699",
    metricPrev: "$ 9,456",
    delta: "34.3%",
    deltaType: "moderateIncrease",
  },
  {
    title: "Silver",
    metric: "$ 12,348",
    metricPrev: "$ 10,456",
    delta: "18.1%",
    deltaType: "moderateIncrease",
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Gold() {
  return (
    <Grid numColsSm={2} numColsLg={1} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Flex alignItems="start">
            <Text>{item.title}</Text>
            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
          </Flex>
          <Flex
            className="space-x-3 truncate"
            justifyContent="start"
            alignItems="baseline"
          >
            <Metric>{item.metric}</Metric>
            <Text>from {item.metricPrev}</Text>
          </Flex>
          <AreaChart
            className="mt-6 h-28"
            data={data}
            index="Month"
            valueFormatter={valueFormatter}
            categories={[item.title]}
            colors={["blue"]}
            showXAxis={true}
            showGridLines={false}
            startEndOnly={true}
            showYAxis={false}
            showLegend={false}
          />
        </Card>
      ))}
    </Grid>
  );
}
