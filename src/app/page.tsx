import { Card, Grid, Col, Title, Text } from "@tremor/react";
import Total from "@/components/Total";
import Gold from "@/components/Gold";
import Stocks from "@/components/Stocks";
import Review from "@/components/Review";

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-between mx-6">
        <Title className="text-slate-800 font-normal text-3xl">
          Your Open Source Portfolio Tracking Dashboard
        </Title>
        <Text>Welcome, Tugrul</Text>
      </div>
      <Grid numColsLg={6} className="gap-6">
        {/* Main section */}
        <Col numColSpanLg={4}>
          <Card className="h-full mt-6">
            <Total />
            <Review />
          </Card>
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6 mt-6">
            <Card>
              <Gold />
            </Card>
            <Card>
              <Stocks />
            </Card>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
