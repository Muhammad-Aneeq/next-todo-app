export default async function getAssignmentTodos() {
  const res = await fetch(
    "http://127.0.0.1:3000/api/todos?category=assignments",
    { next: { revalidate: 10 } }
  );
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
