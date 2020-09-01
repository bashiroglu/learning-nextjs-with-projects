import React from "react";
import axios from "axios";
import Statistics from "../statistics/Statistics";
import ShortLinkOutput from "../short-link/ShortLinkOutput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import cuid from "cuid";

export default function Functionality() {
  const [outputedLinks, setOutputedLinks] = useState([]);
  const { register, handleSubmit, errors, reset, formState } = useForm();

  async function onSubmit(data) {
    try {
      const response = await axios({
        method: "post",
        url: `https://rel.ink/api/links/`,
        data: {
          url: data.linkToShorten,
        },
      });

      setOutputedLinks([
        ...outputedLinks,
        {
          longLink: data.linkToShorten,
          shortLink: `https://rel.ink/${response.data.hashid}`,
          id: cuid(),
        },
      ]);

      reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="functionality">
      <div className="form-link">
        <form className="link-input" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="linkToShorten"
            placeholder="Shorten a link Here"
            ref={register({ required: true, minLength: 6 })}
            className={errors.linkToShorten && "error"}
          />
          {errors.linkToShorten ? (
            <span className="error-label">Please add a valid link</span>
          ) : null}
          <button
            type="submit"
            className="btn btn-rounded-small"
            disabled={formState.isSubmitting}
          >
            Shorten It!
          </button>
        </form>
      </div>
      {formState.isSubmitting && (
        <div className="links-output spinner-container">
          <img src="./assets/spinner.svg" className="spinner" />
        </div>
      )}

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
