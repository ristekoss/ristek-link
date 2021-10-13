import React from "react";
import dynamic from "next/dynamic";
import { ResultBoxProps } from "./types";

const DynamicResultBox = dynamic(() => import(/* webpackChunkName: "ResultBox" */"./ResultBox"));
const ResultBoxWrapper = (props: ResultBoxProps) => {
  return <DynamicResultBox {...props} />;
};

export default ResultBoxWrapper;
