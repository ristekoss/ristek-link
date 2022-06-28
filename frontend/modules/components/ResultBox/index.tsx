import { FC } from 'react';

type ResultBoxProps = {
  onCopy?: () => unknown;
  isCopied?: boolean;
  isLoading?: boolean;
  alias: string;
};

const ResultBox: FC<ResultBoxProps> = (props) => {
  const { isLoading = false, isCopied = false, alias, onCopy } = props;

  if (isLoading) {
    return (
      <div className="absolute -bottom-32 w-full h-8 bg-gray-300 animate-pulse py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg" />
    );
  }

  return (
    <div className="absolute -bottom-32 w-full h-8 bg-primary py-9 flex flex-row items-center justify-between rounded-md px-4 mt-3 shadow-lg">
      <div className="text-white font-bold truncate">{`https://ristek.link/${alias}`}</div>
      <div className="text-white cursor-pointer" onClick={onCopy}>
        {isCopied ? 'Copied!' : 'Copy'}
      </div>
    </div>
  );
};

export default ResultBox;
