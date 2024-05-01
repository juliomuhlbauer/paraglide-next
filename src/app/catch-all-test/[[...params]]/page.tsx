import ClientParams from "./client";

export default function CatchAllPage({
  params,
}: {
  params: { params: string[] };
}) {
  return (
    <div>
      <div>Server params: {JSON.stringify(params, null, 2)}</div>

      <ClientParams />
    </div>
  );
}
