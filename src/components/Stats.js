import Image from "next/image";
import { personalityImages } from "../data/personalities";
import Struggle from "./Struggle";

export default function Stats({ personality, struggle }) {
  return (
    <section className="container mobile-column stats-section">
      <article>
        <Image alt='Most common persona' src={personalityImages[personality]} className="top-image" />

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="count">1</div>
          <div className="row" style={{ alignItems: 'center' }}>
            Most common persona
          </div>
        </div>
      </article>

      <article>
        <Struggle text={struggle} />

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className="count">2</div>
          <div className="row" style={{ alignItems: 'center' }}>
            Most relatable struggle
          </div>
        </div>
      </article>
    </section>
  );
}