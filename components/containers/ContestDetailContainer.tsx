import { useRouter } from "next/router";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContestDetailRequest } from "../../redux/actionCreators/contestActionCreators";
import { getSubmissionRequest } from "../../redux/actionCreators/submissionActionCreators";
import { Contest } from "../../redux/actionTypes/contestActionTypes";
import { RootState } from "../../redux/reducers/rootReducer";
import Button from "../common/Button";
import Spinner from "../common/Spinner";
import SubmissionCard from "../ContestDetail/SubmissionCard";
import SubmissionModal from "../ContestDetail/SubmissionModal";

interface State {
  dataGetContestDetail: Contest;
  loadingGetContestDetail: boolean;
}

function ContestDetailContainer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    dataGetContestDetail: data,
    loadingGetContestDetail: loading,
  }: State = useSelector((state: RootState) => state.contest);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof router.query.id === "string" && router.isReady) {
      dispatch(getContestDetailRequest(router.query.id));
    }
  }, [router.isReady]);

  const openModal = (id: number) => {
    setShowModal(true);
    dispatch(getSubmissionRequest(id))
  };

  return (
    <div className="flex flex-col items-center pb-12 px-3">
      {loading && (
        <div className="w-[900px] h-[calc(100vh-185px)] flex justify-center items-center">
          <Spinner widthClass="w-10" />
        </div>
      )}
      {data && !loading && (
        <div className="flex flex-col items-center pb-12">
          <div className="lg:w-[600px]">
            <h1 className="text-3xl font-bold mt-5 lg:mt-11 mb-4">
              {data.title}
            </h1>
            <p className="mb-4">
              Status: <span className="font-bold">{data.status}</span>
            </p>
            <p className="mb-4">
              Winner Prize:{" "}
              <span className="font-bold">IDR {data.prize_text}</span>
            </p>
            <p className="mb-4">
              Due Date: <span className="font-bold">{data.due_date}</span>
            </p>
            <p className="mb-6">
              Announcement:
              <span className="font-bold"> {data.announcement_date} </span>
            </p>
            <p className="text-black-1">{data.description}</p>
            <div className="flex justify-center my-10">
              <Button
                label="Submit your work"
                type="primary"
                onClick={() => router.push(`/contest/${router.query.id}/submit`)}
                className="w-[176px] font-bold"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-center font-bold text-3xl mb-[52px]">
              <p>Submission</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              {data.submissions.map((submission, index) => (
                <SubmissionCard
                  submission={submission}
                  key={submission.id}
                  className="col-span-1"
                  onClick={() => openModal(submission.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <SubmissionModal
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
}

export default ContestDetailContainer;
