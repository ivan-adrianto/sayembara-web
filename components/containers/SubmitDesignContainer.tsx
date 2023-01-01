import Image from "next/image";
import { useRouter } from "next/router";
import React, { DragEvent, MouseEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToastMessage } from "../../redux/actionCreators/generalActionCreator";
import { submitSubmissionRequest } from "../../redux/actionCreators/submissionActionCreators";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import Input from "../common/Input";

function SubmitDesignContainer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { loadingSubmitSubmission: loading } = useSelector((state: RootState) => state.submission)

  const [uploadedImages, setUploadedImages] = useState<
    (string | ArrayBuffer | null)[]
  >([]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleUpload = (items: FileList | null) => {
    if (uploadedImages.length === 6) {
      dispatch(setToastMessage("You can only upload 5 images"));
      return;
    }
    if (items) {
      const file = items[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setUploadedImages((prev) => [...prev, reader.result]);
      });
      reader.readAsDataURL(file);
    }
  };

  const handleClickUpload = () => {
    inputRef?.current?.click();
  };

  const handleDelete = (
    event: MouseEvent,
    item: string | ArrayBuffer | null
  ) => {
    event.stopPropagation();
    setUploadedImages((prev) => prev.filter((val) => val !== item));
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleUpload(event.dataTransfer.files);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const submit = () => {
    if (uploadedImages.length === 0) {
      return dispatch(setToastMessage("You must upload an image"));
    }
    if (!title) {
      return dispatch(setToastMessage("Title cannot be blank"));
    }
    if (!description) {
      return dispatch(setToastMessage("Description cannot be blank"));
    }
    const data = {
      images: uploadedImages as string[],
      description,
      title,
      contest_id: parseInt(router.query.id as string),
    };
    dispatch(submitSubmissionRequest(data));
  };

  return (
    <div className="lg:w-[574px] px-3 pb-5">
      <input
        type="file"
        className="hidden"
        id="input-file"
        onChange={(event) => handleUpload(event.target.files)}
        ref={inputRef}
      />

      <div
        className="bg-grey-2 rounded-md px-6 py-[18px] mt-3 lg:mt-12 cursor-pointer"
        onClick={handleClickUpload}
        onDrop={handleDrop}
        onDragOver={handleDrag}
      >
        <div className="flex justify-center mt-0 lg:mt-8 mb-4 lg:mb-14 ">
          <p className="text-2xl ">Upload or Drag & Drop your file</p>
        </div>
        <div className="flex-wrap lg:grid lg:grid-cols-5 gap-4 justify-center">
          {uploadedImages.map((item, index) => (
            <div className="relative" key={`image-${index}`}>
              <Image
                src={typeof item === "string" ? item : ""}
                alt=""
                height={93}
                width={93}
                className="col-span-1 border-8 lg:border-4 border-white mb-5 lg:mb-0 w-full lg:w-[93px] object-cover"
              />
              <Image
                src={"/icons/icon-delete.png"}
                alt="delete"
                height={20}
                width={20}
                className="absolute top-3 right-3 lg:top-2 lg:right-2 delete-img"
                onClick={(event) => handleDelete(event, item)}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 lg:mt-14 font-bold mb-1">Title</p>
      <Input onChange={(event) => setTitle(event.target.value)} />

      <p className="mt-3 font-bold mb-1">Description</p>
      <textarea
        cols={30}
        rows={5}
        className="border rounded border-grey-1 lg:mb-9 mb-5 w-full px-3 py-2"
        onChange={(event) => setDescription(event.target.value)}
        value={description}
      />
      <Button
        label="Submit"
        type="primary"
        className="m-auto w-[138px]"
        onClick={submit}
        loading={loading}
      />
    </div>
  );
}

export default SubmitDesignContainer;
