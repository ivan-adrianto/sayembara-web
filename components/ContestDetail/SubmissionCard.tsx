import Image from "next/image";
import React from "react";
import { Submission } from "../../redux/actionTypes/contestActionTypes";
interface Props {
  className?: string;
  submission: Submission;
}
function SubmissionCard({ className, submission }: Props) {
  return (
    <div className={`h-[300px] w-[300px] rounded-md shadow-lg ${className}`}>
      <Image
        src={submission?.thumbnail}
        loader={() => submission.thumbnail}
        alt="thumbnail"
        height={180}
        width={300}
        className="max-h-[180px] rounded-t-md object-cover"
        unoptimized
        priority
      />
      <div className="p-4">
        <p className="font-bold text-light-green mb-2">{submission?.title}</p>
        <p className="text-black-1 line-clamp overflow-hidden">{submission?.description}</p>
      </div>
    </div>
  );
}

export default SubmissionCard;
