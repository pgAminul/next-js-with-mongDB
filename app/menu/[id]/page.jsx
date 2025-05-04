export default async function page({ params }) {
  const { id } = await params;
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();

  const find = result.find((user) => user.id === parseInt(id));
  console.log(find);

  return (
    <div>
      <h2>{find.name}</h2>
      <h2>{find.email}</h2>
      <h2>{find.username}</h2>
      <h2>{find.phone}</h2>
    </div>
  );
}
