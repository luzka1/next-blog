import { ExampleRevalidate } from "@/components/ExampleRevalidate";
import { GetHourNow } from "@/components/GetDateNow";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default function ExamplePage() {
  return (
    <div>
      <h1 className="text-5xl font-bold">
        <Suspense fallback={<SpinLoader />}>
          <GetHourNow />
        </Suspense>
      </h1>

      <div>
        <ExampleRevalidate />
      </div>
    </div>
  );
}
