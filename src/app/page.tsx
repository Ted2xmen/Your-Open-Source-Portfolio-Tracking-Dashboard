"use client";
import Summary from "@/components/Summary";
import CustomTable from "@/components/CustomTable";
import { Card, Title, Text, Grid, TextInput } from "@tremor/react";
import { NumberInput } from "@tremor/react";
import { Button } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";

export default function Example() {
  return (
    <main>
      <Title>Buy Wisely</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      {/* KPI section */}
      <Grid numItemsMd={2} className="mt-6 gap-6 justify-end">
        <Card>
          {/* Placeholder to set height */}
          {/* <CustomTable /> */}
          <Text className="py-3">Product</Text>
          <TextInput placeholder="Name..." />

          <Text className="py-3">Price</Text>
          <NumberInput placeholder="Amount..." />

          <Text className="py-3">Monthly Uses</Text>
          <NumberInput placeholder="" />

          <div className="mt-8 w-full flex justify-end items-center gap-3">
            <Text className="">Quality</Text>
            <Select>
              <SelectItem value="1">75-100</SelectItem>
              <SelectItem value="2">Meters</SelectItem>
              <SelectItem value="3">Miles</SelectItem>
              <SelectItem value="4">Nautical Miles</SelectItem>
            </Select>
            <Text className="">Lifespan</Text>
            <Select placeholder="Select Year">
              <SelectItem value="1">3 Year</SelectItem>
              <SelectItem value="2">4</SelectItem>
              <SelectItem value="3">Miles</SelectItem>
              <SelectItem value="4">Nautical Miles</SelectItem>
            </Select>

            <Button className="justify-end" size="md">
              Add
            </Button>
          </div>
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <Summary />
        </Card>
      </Grid>

      {/* Main section */}
      <Card className="mt-6">
        <CustomTable />
      </Card>
    </main>
  );
}
