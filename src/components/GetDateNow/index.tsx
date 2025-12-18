"use client";

import { formatHour } from "@/utils/format-datetime";

export function GetHourNow() {
  const hour = formatHour(Date.now());

  return <>{hour}</>;
}
