export default function SearchPage({ params }: { params: { search: string } }) {
  return <div>{JSON.stringify(params, null, 2)}</div>;
}
