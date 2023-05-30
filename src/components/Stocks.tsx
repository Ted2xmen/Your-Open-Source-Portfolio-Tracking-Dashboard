import {
  Card,
  Metric,
  Text,
  List,
  ListItem,
  BadgeDelta,
  Flex,
  Bold,
  DeltaType,
  Grid,
} from "@tremor/react";

const sales = [
  {
    name: "TUPRAŞ",
    stat: "-6.3%",
    status: "moderateDecrease",
  },
  {
    name: "ASELSAN",
    stat: "6.7%",
    status: "increase",
  },
  {
    name: "Aksa",
    stat: "2.9%",
    status: "moderateIncrease",
  },
];

const profit = [
  {
    name: "Switzerland",
    stat: "1.3%",
    status: "unchanged",
  },
  {
    name: "Germany",
    stat: "3.3%",
    status: "moderateIncrease",
  },
  {
    name: "Italy",
    stat: "2.6%",
    status: "moderateIncrease",
  },
  {
    name: "France",
    stat: "-8.2%",
    status: "decrease",
  },
];

const customers = [
  {
    name: "TUPRAŞ",
    stat: "-6.3%",
    status: "moderateDecrease",
  },
  {
    name: "ASELSAN",
    stat: "6.7%",
    status: "increase",
  },
  {
    name: "Aksa",
    stat: "2.9%",
    status: "moderateIncrease",
  },
];

const categories = [
  {
    title: "Stocks",
    metric: "$ 23,456",
    data: sales,
  },
];

export default function Stocks() {
  return (
    <Grid numColsSm={2} numColsLg={1} className="gap-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Flex className="mt-6">
            <Text>
              <Bold>Country</Bold>
            </Text>
            <Text>
              <Bold>WoW (%)</Bold>
            </Text>
          </Flex>
          <List className="mt-1">
            {item.data.map((country) => (
              <ListItem key={country.name}>
                <Flex justifyContent="start" className="truncate space-x-2.5">
                  <BadgeDelta deltaType={country.status as DeltaType} />
                  <Text className="truncate">{country.name}</Text>
                </Flex>
                <Text>{country.stat}</Text>
              </ListItem>
            ))}
          </List>
        </Card>
      ))}
    </Grid>
  );
}
