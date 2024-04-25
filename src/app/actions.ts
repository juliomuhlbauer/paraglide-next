"use server";

export async function fetchData() {
  const data = "this is the data";

  console.log("server response:", data);

  return data;
}
