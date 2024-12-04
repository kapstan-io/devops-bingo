import React from "react";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="container mobile-column row">
        <div className="banner-text">
          <span>From firefighting to innovating,</span><br />
          <span>Kapstan helps you work smarter, <span className="italic">not harder.</span></span>
        </div>

        <a className='button-main button-primary' href="https://www.kapstan.io" target="_blank" rel="noreferrer">
          See Kapstan in Action
        </a>
      </div>
    </section>
  )
}