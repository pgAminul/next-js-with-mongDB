import Link from "next/link";
import React from "react";

export default function router() {
  return (
    <div className="flex flex-col">
      <div>
        <Link href={"/dashboard/admin"}> Admin</Link>
      </div>
      <div>
        <Link href={"/dashboard/user"}> User</Link>
      </div>
    </div>
  );
}
