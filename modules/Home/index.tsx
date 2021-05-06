import React, { useState, useEffect } from "react";
import LeftBanner from "../images/LeftBanner";
import RightBanner from "../images/RightBanner";
import RistekLogo from "../images/Logo";
import BottomBanner from "../images/Bottom";
import Input from "../components/Input";
import Button from "../components/Button";
import ResultBox from "../components/ResultBox";
import { useToast } from "@chakra-ui/react";
import useClipboard from "react-use-clipboard";

const HomePage = () => {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [isAllowed, setIsAllowed] = useState(false);
  const [isUrlValid, setIsUrlValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);
  const [result, setResult] = useState("");
  const [isCopied, setCopied] = useClipboard(`https://ristek.link/${result}`, {
    successDuration: 3000,
  });
  const toast = useToast();

  const handleUrlType = (text: string) => {
    setUrl(text);
    const urlRegexPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(urlRegexPattern);
    if (text.match(regex)) {
      setIsAllowed(true);
      setIsUrlValid(true);
      return;
    }
    setIsAllowed(false);
    setIsUrlValid(false);
  };

  const handleAliasType = (text: string) => {
    setAlias(text.split(" ").length > 1 ? text.split(" ").join("-") : text);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    fetch("/api/shorten", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        alias,
        url,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.ok) {
          setResult(result.data);
          setIsGenerated(true);
          setIsLoading(false);
          setUrl("");
          setAlias("");
        } else {
          setIsLoading(false);
          setAlias("");
          setIsGenerated(false);
          toast({
            title: "Error occured",
            description: result.data,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      });
  };

  useEffect(() => {
    if (!!alias && isUrlValid) {
      return setIsAllowed(true);
    }
    setIsAllowed(false);
  }, [url, alias]);

  const handleCopy = () => {
    setCopied();
  };

  return (
    <div className="w-full h-screen max-h-screen overflow-hidden relative">
      <LeftBanner className="absolute top-0 left-0 hidden h-screen w-auto lg:block" />
      <BottomBanner className="block lg:hidden absolute bottom-0 w-full h-auto" />
      <RightBanner className="absolute top-0 right-0 hidden h-screen w-auto lg:block" />
      <div className="h-full w-full left-0 right-0 top-0 bottom-0 ">
        <div className="w-full h-full flex flex-col justify-center items-center px-5">
          <a href="http://ristek.cs.ui.ac.id/" target="__blank">
            <RistekLogo className=" top-2 absolute" />
          </a>
          <div className="font-poppins font-bold text-4xl md:text-6xl text-black">
            RISTEK.<span className="text-primary">LINK</span>
          </div>
          <div className="font-poppins font-medium text-sm md:text-xl text-center mb-5">
            The easiest customizable url shortener, ever.
          </div>
          <div className="w-full max-w-sm flex flex-col items-center relative">
            <Input
              placeholder="Enter your long url"
              value={url}
              onChange={(e) => handleUrlType(e.target.value)}
              isError={!isUrlValid}
              errorMessage={isUrlValid ? "" : "Please enter a valid url."}
            />
            <div className="my-5 flex flex-row items-center w-full justify-center">
              <div className="font-poppins font-medium mr-1">ristek.link/</div>
              <Input
                placeholder="Enter your short url"
                onChange={(e) => handleAliasType(e.target.value)}
                value={alias}
              />
            </div>
            <Button
              disabled={!isAllowed}
              onClick={() => isAllowed && !isLoading && handleSubmit()}
              isLoading={isLoading}
            >
              <div className=" font-semibold text-lg">Shorten!</div>
            </Button>
            {isGenerated && (
              <ResultBox
                onCopy={() => handleCopy()}
                isCopied={isCopied}
                isLoading={isLoading}
                alias={result}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
