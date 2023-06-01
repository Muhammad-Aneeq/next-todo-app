export default async function getProductivityTodos() {
  const res = await fetch(
    "http://127.0.0.1:3000/api/todos?category=productivity",
    { next: { revalidate: 10 } }
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
