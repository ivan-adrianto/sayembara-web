import Image from "next/image";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileRequest,
  updateProfileRequest,
} from "../../redux/actionCreators/authActionCreators";
import { User } from "../../redux/actionTypes/authActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import Input from "../common/Input";

interface State {
  user: User;
  loadingUpdateProfile: boolean;
}

function ProfileContainer() {
  const dispatch = useDispatch();

  const { user, loadingUpdateProfile: loading }: State = useSelector(
    (state: RootState) => state.auth
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [isUpdating, setIsUpdating] = useState(false);
  const [data, setData] = useState<User>({
    fullname: "",
    id: "",
    email: "",
    bank: "",
    account_number: null,
    location: "",
    avatar: "",
  });
  const [fullnameError, setFullnameError] = useState("");

  useEffect(() => {
    dispatch(getProfileRequest());
  }, []);

  useEffect(() => {
    if (user) {
      setData(user);
    }
  }, [user]);

  const handleClick = () => {
    if (!isUpdating) {
      setIsUpdating(true);
    } else {
      submit();
      setIsUpdating(false);
    }
  };

  const handleUpload = (items: FileList | null) => {
    if (items && items.length > 0) {
      const file = items[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setData((prev) => {
          return {
            ...prev,
            avatar: reader.result as string,
          };
        });
        dispatch(
          updateProfileRequest({ ...user, avatar: reader.result as string })
        );
      });
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (event: MouseEvent) => {
    event.stopPropagation();
    setData((prev) => {
      return {
        ...prev,
        avatar: "",
      };
    });
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
    dispatch(updateProfileRequest({ ...user, avatar: null }));
  };

  const updateInputField = (field: string, value: string) => {
    setData((prev) => {
      if (field === "account_number") {
        return {
          ...prev,
          [field]: parseInt(value),
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const submit = () => {
    if (!data.fullname) {
      return setFullnameError("Fullname cannot be blank");
    }
    dispatch(updateProfileRequest(data));
  };

  return (
    data && (
      <div className="flex items-center flex-col">
        <div className="relative">
          <input
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={(event) => handleUpload(event.target.files)}
          />
          <Image
            src={data.avatar || "/icons/icon-profile.svg"}
            loader={() => data.avatar || "/icons/icon-profile.svg"}
            alt="profile-photo"
            height={160}
            width={160}
            className="rounded-full mt-11 mb-9 bg-light-green cursor-pointer"
            onClick={() => inputRef.current?.click()}
          />
          {data.avatar && (
            <div
              className="bg-red-400 p-2 absolute top-3 right-3 lg:top-11 lg:right-2 rounded-full cursor-pointer"
              onClick={(event) => handleDelete(event)}
            >
              <Image
                src={"/icons/icon-delete.png"}
                alt="delete"
                height={20}
                width={20}
                className="delete-img"
              />
            </div>
          )}
        </div>
        <div className="w-[574px]">
          <div className="mb-6">
            <p className="font-bold mb-2">Fullname</p>
            <Input
              value={data.fullname}
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
              isError={fullnameError !== ""}
              errMessage={fullnameError}
              onChange={(event) =>
                updateInputField("fullname", event.target.value)
              }
            />
          </div>
          <div className="mb-6">
            <p className="font-bold mb-2">Location</p>
            <Input
              value={data.location}
              disabled={!isUpdating}
              className={!isUpdating ? "text-grey-1" : ""}
              onChange={(event) =>
                updateInputField("location", event.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <p className="font-bold">Bank</p>
              <Input
                value={data.bank}
                disabled={!isUpdating}
                className={!isUpdating ? "text-grey-1" : ""}
                onChange={(event) =>
                  updateInputField("bank", event.target.value)
                }
              />
            </div>
            <div className="col-span-1">
              <p className="font-bold">Account Number</p>
              <Input
                value={data.account_number?.toString()}
                disabled={!isUpdating}
                className={!isUpdating ? "text-grey-1" : ""}
                onChange={(event) =>
                  updateInputField("account_number", event.target.value)
                }
                type="number"
              />
            </div>
          </div>
        </div>
        <Button
          label={isUpdating ? "Save" : "Update"}
          type="primary"
          className="w-[138px] mt-10 m-auto"
          onClick={handleClick}
          loading={loading}
        />
      </div>
    )
  );
}

export default ProfileContainer;
