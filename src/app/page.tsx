"use client";

import { fetchData } from "./actions";

export default function Home() {
  return (
    <button
      onClick={async () => {
        const response = await fetchData();

        console.log("client response:", response);
      }}
      type="button"
    >
      Server action
    </button>
  );
}
