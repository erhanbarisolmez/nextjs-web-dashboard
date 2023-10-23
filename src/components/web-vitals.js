'use client'
import { useReportWebVitals } from 'next/web-vitals';
export default function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric.name, metric.value, metric.label);
    console.log(metric.rating)
  });
  return null;
}
