import Image from "next/image";
import React from "react";
interface Props {
  className?: string;
}
function SubmissionCard({ className }: Props) {
  return (
    <div className={`h-[300px] w-[300px] rounded-md shadow-lg ${className}`}>
      <Image
        src={
          "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
        }
        alt="thumbnail"
        height={180}
        width={300}
        className="max-h-[180px] rounded-t-md"
      />
      <div className="p-4">
        <p className="font-bold text-light-green mb-2" >by Marvel</p>
        <p className="text-black-1" >
          lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum...
        </p>
      </div>
    </div>
  );
}

export default SubmissionCard;
