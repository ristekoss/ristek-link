import React from 'react'

type ResultBoxProps = {
  onCopy?: () => any;
  isCopied?: boolean;
  isLoading?: boolean;
}

const ResultBox = (props:ResultBoxProps) => {
  if (props.isLoading) {
    return(
    <div className="absolute -bottom-32 w-full h-8 bg-gray-300 animate-pulse  py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg" />
  )}
  else{
    return(
      <div className="absolute -bottom-32 w-full h-8 bg-primary py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg" >
      <div className="text-white font-bold" >https://ristek.link/test-url</div>
      <div className="text-white cursor-pointer" onClick={() => props.onCopy()} >{props.isCopied ? "Copied!" : "Copy"}</div>
    </div>
    )
  }
}

export default ResultBox