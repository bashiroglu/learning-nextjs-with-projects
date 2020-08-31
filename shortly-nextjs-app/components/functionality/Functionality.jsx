import React from "react";
import axios from "axios";
import Statistics from "../statistics/Statistics";
import ShortLinkOutput from "../short-link/ShortLinkOutput";
import { useState } from "react";
import cuid from "cuid";

export default function Functionality() {
  const [loading, setLoading] = useState(false);
  const [outputedLinks, setOutputedLinks] = useState([]);
  const [linkToShorten, setLinkToShorten] = useState("");

  async function shortenLink(linkToShorten) {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: `https://rel.ink/api/links/`,
        data: {
          url: linkToShorten,
        },
      });

      setOutputedLinks([
        ...outputedLinks,
        {
          longLink: linkToShorten,
          shortLink: `https://rel.ink/${response.data.hashid}`,
          id: cuid(),
        },
      ]);
      setLinkToShorten("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="functionality">
      <div className="form-link">
        <div className="link-input">
          <input
            type="text"
            placeholder="Shorten a link Here"
            value={linkToShorten}
            onChange={(event) => {
              setLinkToShorten(event.target.value);
            }}
          />
          <button
            className="btn btn-rounded-small"
            onClick={() => shortenLink(linkToShorten)}
            disabled={loading}
          >
            Shorten It!
          </button>
        </div>
      </div>
      {outputedLinks.length > 0 &&
        outputedLinks.map((link) => (
          <ShortLinkOutput
            longLink={link.longLink}
            shortLink={link.shortLink}
            key={link.id}
          />
        ))}
      <Statistics />
    </section>
  );
}
