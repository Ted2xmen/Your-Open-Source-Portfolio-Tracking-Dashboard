"use client";
import { useState } from "react";
import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

const salesPeople = [
  {
    name: "Coffe Machine",
    expectedUses: 40,
    price: 1500,
    quality: "high",
    costPerUse: null,
  },
  {
    name: "Airfryer",
    expectedUses: 30, // monthly
    price: 2500,
    quality: "medium",
    costPerUse: null,
  },
];

export default function CustomTable() {
  const [selectedNames, setSelectedNames] = useState([]);

  const isSalesPersonSelected = (salesPerson) =>
    selectedNames.includes(salesPerson.name) || selectedNames.length === 0;

  function calculateCostPerUse(price, expectedUsesDaily) {
    return price / expectedUsesDaily;
  }

  return (
    <Card>
      <MultiSelect
        onValueChange={setSelectedNames}
        placeholder="Select Product..."
        className="max-w-xs">
        {salesPeople.map((item) => (
          <MultiSelectItem key={item.name} value={item.name}>
            {item.name}
          </MultiSelectItem>
        ))}
      </MultiSelect>
      <Table className="mt-6">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell className="text-right">Quality</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Expected Uses / Daily
            </TableHeaderCell>
            <TableHeaderCell className="text-right">Price ($)</TableHeaderCell>
            <TableHeaderCell className="text-right">
              Cost Per Use ($)
            </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {salesPeople
            .filter((item) => isSalesPersonSelected(item))
            .map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-right">{item.quality}</TableCell>
                <TableCell className="text-right">
                  {item.expectedUses}
                </TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell className="text-right">
                  {calculateCostPerUse(item.price, item.expectedUses)}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
  );
}
