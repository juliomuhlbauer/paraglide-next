"use client";

import { useParams } from "next/navigation";

export default function ClientParams() {
  const params = useParams();

  return <div>Client params: {JSON.stringify(params, null, 2)}</div>;
}
