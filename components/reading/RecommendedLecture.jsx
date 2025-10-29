import Link from "next/link";
import React from "react";

const RequiredBooks = ({ title, creator, url }) => {
  return (
    <div className="p-5 border border-blue-200 rounded-md">
      <div>
        <p className="font-bold">{title}</p>
        <p className="font-semibold">{creator}</p>
        <Link
          href={url}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Watch Lecture
        </Link>
      </div>
    </div>
  );
};

export default RequiredBooks;
