import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";

function ProfileContainer() {
  const [isUpdating, setIsUpdating] = useState(false);
  const handleClick = () => {
    if (!isUpdating) {
      return setIsUpdating(true);
    }
    setIsUpdating(false);
  };
  return (
    <div className="flex items-center flex-col">
      <Image
        src={
          "https://i.picsum.photos/id/10/400/400.jpg?hmac=PIwVt0zDIDLjFhsKCUPaltt0400fYkh4vldbdFvqEz4"
        }
        alt="profile-photo"
        height={160}
        width={160}
        className="rounded-full mt-11 mb-9"
      />
      <div className="w-[574px]">
        <div className="grid grid-cols-2 mb-6 gap-5">
          <div className="col-span-1">
            <p className="font-bold mb-2">First Name</p>
            <Input
              value="John"
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
            />
          </div>
          <div className="col-span-1">
            <p className="font-bold mb-2">Last Name</p>
            <Input
              value="Doe"
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
            />
          </div>
        </div>
        <div className="mb-6">
          <p className="font-bold mb-2">Location</p>
          <Input
            value="St. Kreak 202 London"
            disabled={!isUpdating}
            className={!isUpdating ? "text-grey-1" : ""}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-1">
            <p className="font-bold">Bank</p>
            <Input
              value="BCA"
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
            />
          </div>
          <div className="col-span-1">
            <p className="font-bold">Account Number</p>
            <Input
              value="43894729847"
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
            />
          </div>
        </div>
      </div>
      <Button
        label={isUpdating ? "Save" : "Update"}
        type="primary"
        className="w-[138px] mt-10 m-auto"
        onClick={handleClick}
      />
    </div>
  );
}

export default ProfileContainer;
