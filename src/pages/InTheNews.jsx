import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import BigCta from "../components/BigCta.jsx";
import Lightbox from "../components/Lightbox.jsx";
import { CASES, CLIPPINGS, VIDEOS, PHOTOS, ARTICLES, videoSrc, videoPoster } from "../data/news.js";

/* Full press archive: national headlines, newspaper clippings and the
   broadcast footage Marc's cases generated over 15+ years. */
export default function InTheNews() {
  const [params, setParams] = useSearchParams();
  const fromUrl = params.get("case");
  const [cse, setCse] = useState(CASES.some((c) => c.key === fromUrl) ? fromUrl : "all");
  const [zoom, setZoom] = useState(null);
  const pick = (key) => {
    setCse(key);
    setParams(key === "all" ? {} : { case: key }, { replace: true });
  };
  usePageMeta({
    title: "In the News - San Diego Criminal Defense Attorney Marc S. Kohnen",
    description:
      "CNN, the Washington Post, the Today Show, TMZ and every San Diego station — see the national and local press coverage of Marc Kohnen's criminal defense cases.",
    themeColor: "#05080f",
    bodyBg: "#05080f",
  });

  const clippings = CLIPPINGS.filter((c) => cse === "all" || c.case === cse);
  const videos = VIDEOS.filter((v) => cse === "all" || v.case === cse);
  const photos = PHOTOS.filter((p) => cse === "all" || p.case === cse);
  const articles = ARTICLES.filter((a) => cse === "all" || a.case === cse);

  return (
    <>
      <PageHero
        eyebrow="Press · Headlines · Broadcast"
        title={<>When the stakes are national, <em style={{ color: "var(--gold-2)" }}>they call Marc.</em></>}
        sub="From CNN and the Washington Post to every San Diego affiliate — the cases Marc Kohnen defends make headlines, and the verdicts he wins make front pages."
        crumbs={[["In the News", null]]}
      />

      <div className="outlets" aria-label="Outlets that have covered Marc Kohnen">
        <span>CNN</span>
        <span>HLN</span>
        <span>The Today Show</span>
        <span>The Washington Post</span>
        <span>Wall Street Journal</span>
        <span>NY Post</span>
        <span>TMZ</span>
        <span>Miami Herald</span>
        <span>Daily Mail</span>
        <span>Globe and Mail</span>
        <span>Union-Tribune</span>
        <span>NBC · ABC · CBS · FOX</span>
      </div>

      <section className="block" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="casetabs" role="tablist" aria-label="Filter coverage by case">
            <div className="filterbar" style={{ margin: 0 }}>
              {CASES.map((c) => (
                <button key={c.key} className={cse === c.key ? "on" : ""} onClick={() => pick(c.key)}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="sec-head">
            <span className="sec-rule">On Air</span>
            <div className="sec-title">Broadcast coverage</div>
            <p>{videos.length} news segments — national networks and every major San Diego station.</p>
          </div>
          <div className="vidgrid">
            {videos.map((v) => (
              <div className="vidcard reveal" key={v.slug}>
                <video controls preload="none" poster={videoPoster(v)} src={videoSrc(v)} />
                <div className="meta">
                  <b>{v.title}</b>
                  <span>{v.outlet}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sec-head" style={{ marginTop: 90 }}>
            <span className="sec-rule">In Print</span>
            <div className="sec-title">Headlines &amp; clippings</div>
            <p>Tap any clipping to read the full article scan.</p>
          </div>
          <div className="clipgrid">
            {clippings.map((c) => (
              <button
                className="clipcard reveal"
                key={c.src}
                onClick={() => setZoom({ ...c, alt: `${c.outlet}: ${c.title} — press coverage of San Diego criminal defense attorney Marc Kohnen` })}
              >
                <span className="ph">
                  <img src={c.src} alt={`${c.outlet}: ${c.title}`} loading="lazy" />
                </span>
                <span className="meta">
                  <b>{c.title}</b>
                  <span>{c.outlet}</span>
                </span>
              </button>
            ))}
          </div>
          {articles.length > 0 && (
            <>
              <div className="sec-head" style={{ marginTop: 90 }}>
                <span className="sec-rule">Original Reporting</span>
                <div className="sec-title">Read the coverage at the source</div>
                <p>Live links to the original articles and transcripts, verified July 2026.</p>
              </div>
              <ul className="prose reveal" style={{ maxWidth: 760, margin: "0 auto" }}>
                {articles.map((a) => (
                  <li key={a.url} style={{ marginBottom: 10 }}>
                    <a href={a.url} rel="noopener">{a.outlet}: {a.title}</a>{" "}
                    <span style={{ opacity: 0.6 }}>({a.date.slice(0, 4)})</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {photos.length > 0 && (
            <>
              <div className="sec-head" style={{ marginTop: 90 }}>
                <span className="sec-rule">From the Archive</span>
                <div className="sec-title">Courtroom &amp; case photos</div>
              </div>
              <div className="photogrid">
                {photos.map((p, i) => (
                  <button
                    key={p.src}
                    className="reveal"
                    onClick={() => setZoom({ ...p, alt: `${p.title} — San Diego criminal defense attorney Marc Kohnen` })}
                    aria-label={`Enlarge: ${p.title}`}
                  >
                    <img src={p.src} alt={`${p.title} — San Diego criminal defense attorney Marc Kohnen`} loading="lazy" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Lightbox item={zoom} onClose={() => setZoom(null)} />

      <BigCta
        title={<>Headline-making defense, <em>on your side.</em></>}
        text="The attorney national newsrooms call for commentary is the same one who will personally take your call. Free, confidential consultation."
      />
    </>
  );
}
