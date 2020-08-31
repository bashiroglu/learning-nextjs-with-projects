import React from "react";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

export default function ShortLinkOutput({ longLink, shortLink }) {
  const [isCopied, handleCopy] = useCopyToClipboard(2000);

  return (
    <div className="links-output">
      <div className="links-box">
        <h3 className="long-link">{longLink}</h3>
        <h3 className="short-link">{shortLink}</h3>
      </div>
      <button
        className={`btn btn-rounded-small ${isCopied ? "btn-copied" : ""}`}
        onClick={() => handleCopy(shortLink)}
      >
        {isCopied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
