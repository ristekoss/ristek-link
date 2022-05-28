import React from "react";
import { BASENAME_URL } from "../../Constants";

type ResultBoxProps = {
  onCopy?: () => any;
  isCopied?: boolean;
  isLoading?: boolean;
  alias: string;
};

const ResultBox = (props: ResultBoxProps) => {
  if (props.isLoading) {
    return (
      <div className="absolute -bottom-32 w-full h-8 bg-gray-300 animate-pulse  py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg" />
    );
  } else {
    return (
      <div className="absolute -bottom-32 w-full h-8 bg-primary py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg">
        <div className="text-white font-bold truncate">{`${BASENAME_URL}/${props.alias}`}</div>
        <div
          className="text-white cursor-pointer"
          onClick={() => props.onCopy()}
        >
          {props.isCopied ? "Copied!" : "Copy"}
        </div>
      </div>
    );
  }
};

export default ResultBox;
