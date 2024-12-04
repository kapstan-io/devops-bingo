import React from "react";

export default function Struggle({ text }) {
  return (
    <article className="top-image top-struggle">
      <div style={{ background: "#000000", width: '100%', padding: '36px 24px' }}>
        {text}
      </div>
    </article>
  )
}