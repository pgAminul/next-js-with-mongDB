import Link from "next/link";

export default async function menu() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  return (
    <div className="grid grid-cols-3 gap-4">
      {result.map((user) => {
        return (
          <div className=" border-4 p-5">
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>

            <Link href={`/menu/${user.id}`}>
              <button className="p-2 rounded-3xl text-white bg-black">
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
