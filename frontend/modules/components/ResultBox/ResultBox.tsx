import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { ResultBoxProps } from "./types";

const ResultBox = (props: ResultBoxProps) => {
  const ristekLink = `${window.location.origin}/${props.alias}`;
  if (props.isLoading) {
    return (
      <div className="absolute -bottom-32 w-full h-8 bg-gray-300 animate-pulse  py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg" />
    );
  } else {
    return (
      <div className="absolute -bottom-32 w-full h-8 bg-primary py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg">
        <a href={ristekLink} target="_blank" className="flex items-center">
          <div className="text-white font-bold hover:underline">{ristekLink}</div>
          <ExternalLinkIcon className="ml-2" color="white" />
        </a>
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
