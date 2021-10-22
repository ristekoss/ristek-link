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
  const isAliasEmpty = alias === "";
  const isUrlEmpty = url === "";

  const handleUrlType = (text: string) => {
    setUrl(text);
    const urlRegexPattern =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(urlRegexPattern);
    if (text.match(regex) && text.split(" ").length === 1) {
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
  const handleEmpty = () => {
    if (!isUrlValid)
      toast({
        title: "Error occured",
        description: "Please enter a valid url",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    else if (isUrlEmpty && isAliasEmpty) {
      toast({
        title: "Long url and short url empty",
        description: "Please enter long url and short url",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (isUrlEmpty) {
      toast({
        title: "Long url empty",
        description: "Please enter long url",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (isAliasEmpty) {
      toast({
        title: "Short url empty",
        description: "Please enter short url",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (!!alias && isUrlValid && !isUrlEmpty) {
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
      <a
        href="http://ristek.cs.ui.ac.id/"
        target="__blank"
        className=" top-2 absolute left-1/2"
      >
        <RistekLogo />
      </a>
      <div
        className="w-full px-5"
        style={{
          margin: "0 auto",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="font-poppins font-bold text-4xl md:text-6xl text-black text-center">
          RISTEK.<span className="text-primary">LINK</span>
        </div>
        <div className="font-poppins font-medium text-sm md:text-xl mb-5 text-center">
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
            onClick={() =>
              isAllowed && !isLoading ? handleSubmit() : handleEmpty()
            }
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
      <a
        href="https://www.producthunt.com/posts/ristek-link?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-ristek-link"
        target="_blank"
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=295238&theme=light"
          alt="RISTEK.Link - World's easiest open-source free customisable url shortener | Product Hunt"
          width="250"
          height="54"
        />
      </a>
    </div>
  );
};

export default HomePage;
