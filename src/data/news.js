/* Press archive supplied by Marc — clippings live in /assets/news, TV
   screengrabs in /assets/press, and converted broadcast footage in /media.
   Case keys group everything on the In the News page. */

export const CASES = [
  { key: "all", label: "All Coverage" },
  { key: "branch", label: "Robert Branch Acquittal" },
  { key: "robbins", label: "Peter Robbins (Charlie Brown)" },
  { key: "trayers", label: "Trayers Trial" },
  { key: "mauling", label: "Fatal Dog Mauling Case" },
  { key: "commentary", label: "Legal Commentary" },
];

export const CLIPPINGS = [
  { case: "branch", outlet: "San Diego Union-Tribune", title: "Acquittal in 'Chokehold' Case — front page", src: "/assets/news/robert-branch-not-guilty-union-tribune-front-page.jpg" },
  { case: "branch", outlet: "San Diego Union-Tribune", title: "NOT GUILTY — the headline every client wants", src: "/assets/news/robert-branch-not-guilty-headline.jpg" },
  { case: "branch", outlet: "San Diego Union-Tribune", title: "Acquittal in 'Chokehold' Case — continued", src: "/assets/news/robert-branch-not-guilty-union-tribune-page-2.jpg" },
  { case: "branch", outlet: "San Diego Union-Tribune", title: "Branch verdict photo coverage", src: "/assets/news/robert-branch-verdict-union-tribune-photo.jpg" },
  { case: "branch", outlet: "Courtroom Sketch", title: "Robert Branch trial — courtroom illustration", src: "/assets/news/robert-branch-courtroom-sketch.jpg" },
  { case: "branch", outlet: "Courtroom Sketch", title: "Court reporter illustration, Branch trial", src: "/assets/news/robert-branch-courtroom-illustration.jpg" },
  { case: "branch", outlet: "ABC 10News", title: "Bail review coverage — Branch case", src: "/assets/news/abc10-robert-branch-bail-review.jpg" },
  { case: "robbins", outlet: "The Washington Post", title: "National coverage of the Peter Robbins case", src: "/assets/news/peter-robbins-washington-post.jpg" },
  { case: "robbins", outlet: "New York Post", title: "Charlie Brown voice actor case", src: "/assets/news/peter-robbins-new-york-post.jpg" },
  { case: "robbins", outlet: "Fox News", title: "Fox News reports on the Robbins case", src: "/assets/news/peter-robbins-fox-news.jpg" },
  { case: "robbins", outlet: "US News & World Report", title: "US News covers the Robbins case", src: "/assets/news/peter-robbins-us-news-world-report.jpg" },
  { case: "robbins", outlet: "NY Daily News", title: "NY Daily News coverage", src: "/assets/news/peter-robbins-ny-daily-news.jpg" },
  { case: "robbins", outlet: "Miami Herald", title: "Miami Herald coverage", src: "/assets/news/peter-robbins-miami-herald.jpg" },
  { case: "robbins", outlet: "The Globe and Mail", title: "Canadian national coverage", src: "/assets/news/peter-robbins-globe-and-mail.jpg" },
  { case: "robbins", outlet: "National Post", title: "National Post (Canada) coverage", src: "/assets/news/peter-robbins-national-post.jpg" },
  { case: "robbins", outlet: "Toronto Sun", title: "Toronto Sun coverage", src: "/assets/news/peter-robbins-toronto-sun.jpg" },
  { case: "robbins", outlet: "UK Daily Mail", title: "International coverage from the UK", src: "/assets/news/peter-robbins-uk-daily-mail.jpg" },
  { case: "robbins", outlet: "Honolulu Star-Advertiser", title: "Honolulu Star-Advertiser coverage", src: "/assets/news/peter-robbins-honolulu-star-advertiser.jpg" },
  { case: "robbins", outlet: "Syracuse Post-Standard", title: "Syracuse Post-Standard coverage", src: "/assets/news/peter-robbins-syracuse-post-standard.jpg" },
  { case: "robbins", outlet: "San Diego Union-Tribune", title: "Union-Tribune on the Robbins case", src: "/assets/news/peter-robbins-san-diego-union-tribune.jpg" },
  { case: "commentary", outlet: "Wall Street Journal", title: "Marc Kohnen quoted in the Wall Street Journal", src: "/assets/news/wall-street-journal-marc-kohnen.jpg" },
  { case: "trayers", outlet: "San Diego Union-Tribune", title: "Trayers sentencing coverage", src: "/assets/news/trayers-union-tribune-sentencing-article.jpg" },
  { case: "trayers", outlet: "San Diego Union-Tribune", title: "Trayers verdict photo", src: "/assets/news/trayers-verdict-union-tribune-photo.jpg" },
  { case: "trayers", outlet: "San Diego Union-Tribune", title: "Trayers sentencing photo", src: "/assets/news/trayers-sentencing-photo-union-tribune.jpg" },
  { case: "mauling", outlet: "San Diego Union-Tribune", title: "Union-Tribune on the fatal dog-mauling defense", src: "/assets/news/union-tribune-dog-mauling-defense-article.jpg" },
  { case: "commentary", outlet: "San Diego Union-Tribune", title: "Arevalos case coverage", src: "/assets/news/arevalos-san-diego-union-tribune-article.jpg" },
  { case: "commentary", outlet: "San Diego CityBeat", title: "CityBeat profiles Marc Kohnen's work", src: "/assets/news/san-diego-citybeat-marc-kohnen-article.jpg" },
];


/* Live, verified links to the original reporting (checked 2026-07-19).
   Only entries confirmed to exist and concern these cases are listed —
   verifiable citations for readers, search engines and AI assistants. */
export const ARTICLES = [
  { case: "branch", outlet: "San Diego Union-Tribune", title: "Security guard acquitted in 'chokehold' case involving sheriff's detective", url: "https://www.sandiegouniontribune.com/news/courts/sd-me-branch-verdict-20170623-story.html", date: "2017-06-23" },
  { case: "branch", outlet: "ABC 10News", title: "Driver found not guilty in resisting arrest case", url: "https://www.10news.com/news/verdict-reached-in-resisting-arrest-case-062317", date: "2017-06-23" },
  { case: "branch", outlet: "NBC 7 San Diego", title: "Man in controversial chokehold case found not guilty", url: "https://www.nbcsandiego.com/news/local/man-in-controversial-chokehold-case-found-not-guilty/18818/", date: "2017-06-23" },
  { case: "branch", outlet: "Thomas Jefferson School of Law", title: "Marc Kohnen '06 wins \"chokehold\" case", url: "https://www.tjsl.edu/news-media/2017/15950", date: "2017-06-23" },
  { case: "robbins", outlet: "Today (NBC)", title: "Charlie Brown voice actor Peter Robbins pleads not guilty to threats", url: "https://www.today.com/news/charlie-brown-voice-actor-peter-robbins-pleads-not-guilty-threats-1C8095569", date: "2013-01-24" },
  { case: "robbins", outlet: "San Diego Union-Tribune", title: "Voice actor for Charlie Brown arrested in Calif.", url: "https://www.sandiegouniontribune.com/2013/01/23/voice-actor-for-charlie-brown-arrested-in-calif-2/", date: "2013-01-23" },
  { case: "robbins", outlet: "CNN", title: "Good grief! Charlie Brown voice actor charged", url: "https://www.cnn.com/2013/01/23/showbiz/charlie-brown-actor-arrested/index.html", date: "2013-01-23" },
  { case: "robbins", outlet: "ABC News", title: "Charlie Brown voice actor accused of stalking", url: "https://abcnews.go.com/Entertainment/charlie-brown-voice-actor-accused-stalking/story?id=18293177", date: "2013-01-23" },
  { case: "robbins", outlet: "TMZ", title: "Charlie Brown voice actor Peter Robbins arrested", url: "https://www.tmz.com/2013/01/23/a-charlie-brown-arrest-voice-actor-accused-of-stalking-peter-robbins/", date: "2013-01-23" },
  { case: "trayers", outlet: "CNN / HLN", title: "Jane Velez-Mitchell — Trayers murder trial segment (Marc Kohnen live on air)", url: "https://transcripts.cnn.com/show/ijvm/date/2012-01-30/segment/01", date: "2012-01-30" },
  { case: "trayers", outlet: "NBC 7 San Diego", title: "Navy wife guilty of second-degree murder", url: "https://www.nbcsandiego.com/news/local/verdict-navy-doctor-love-triangle-trial-trayers/1945550/", date: "2012-02-08" },
  { case: "trayers", outlet: "KPBS", title: "Navy wife found guilty of murdering husband", url: "https://www.kpbs.org/news/military/2012/02/09/navy-wife-found-guilty-of-murdering-husband-video", date: "2012-02-09" },
  { case: "commentary", outlet: "NBC 7 San Diego", title: "Hells Angels member sentenced for attack in Ocean Beach (Kohnen for the defense)", url: "https://www.nbcsandiego.com/news/local/hells-angels-member-sentenced-ocean-beach-attack/3842545/", date: "2025-06-06" },
  { case: "commentary", outlet: "Times of San Diego", title: "Hells Angel sentenced to 21 years to life in Ocean Beach hate crime", url: "https://timesofsandiego.com/crime/2025/06/06/hells-angel-sentenced-to-21-years-to-life-in-ocean-beach-hate-crime/", date: "2025-06-06" },
  { case: "commentary", outlet: "San Diego Union-Tribune", title: "Hells Angels member sentenced for hate-crime attack in OB", url: "https://www.sandiegouniontribune.com/2025/06/09/hells-angels-member-sentenced-to-prison-for-hate-crime-attack-in-ocean-beach/", date: "2025-06-09" },
];

export const VIDEOS = [
  /* --- Robert Branch verdict, June 2017 --- */
  { case: "branch", outlet: "CBS 8 San Diego", title: "Robert Branch NOT GUILTY verdict — 5pm report", slug: "branch-verdict-cbs8-5pm" },
  { case: "branch", outlet: "CBS 8 San Diego", title: "Branch verdict — 11am breaking coverage", slug: "branch-verdict-cbs8-11am" },
  { case: "branch", outlet: "KUSI News", title: "Branch verdict — KUSI 5pm report", slug: "branch-verdict-kusi" },
  { case: "branch", outlet: "NBC 7 San Diego", title: "Branch verdict — NBC 7 4pm report", slug: "branch-verdict-nbc7" },
  { case: "branch", outlet: "FOX 5 San Diego", title: "Branch verdict — FOX 5 5pm report", slug: "branch-verdict-fox5" },
  { case: "branch", outlet: "ABC 10News", title: "Branch case — initial broadcast", slug: "branch-abc10-initial-broadcast" },
  { case: "branch", outlet: "ABC 10News", title: "Branch case — follow-up interview with Marc Kohnen", slug: "branch-abc10-follow-up-interview" },
  { case: "branch", outlet: "NBC 7 San Diego", title: "Branch case — NBC 7 follow-up", slug: "branch-nbc7-follow-up" },
  { case: "branch", outlet: "CW6 San Diego", title: "Branch case — CW6 initial broadcast", slug: "branch-cw6-initial-broadcast" },
  { case: "branch", outlet: "CW6 San Diego", title: "Branch case — CW6 follow-up", slug: "branch-cw6-follow-up" },
  /* --- Peter Robbins case, January 2013 --- */
  { case: "robbins", outlet: "CNN", title: "CNN national coverage — Robbins case", slug: "cnn-charlie-brown-coverage" },
  { case: "robbins", outlet: "CNN", title: "CNN follow-up coverage", slug: "cnn-charlie-brown-follow-up" },
  { case: "robbins", outlet: "HLN", title: "HLN coverage — Robbins case", slug: "hln-charlie-brown-coverage" },
  { case: "robbins", outlet: "TMZ", title: "TMZ coverage — Robbins case", slug: "tmz-charlie-brown-coverage" },
  { case: "robbins", outlet: "ABC", title: "ABC national coverage", slug: "abc-charlie-brown-coverage" },
  { case: "robbins", outlet: "NBC", title: "NBC national coverage", slug: "nbc-charlie-brown-coverage" },
  { case: "robbins", outlet: "CBS 8 San Diego", title: "Robbins in court — CBS 8", slug: "robbins-in-court-cbs8" },
  { case: "robbins", outlet: "ABC 10News", title: "Robbins in court — ABC 10", slug: "robbins-in-court-abc10" },
  { case: "robbins", outlet: "NBC 7 San Diego", title: "Robbins in court — NBC 7", slug: "robbins-in-court-nbc7" },
  { case: "robbins", outlet: "FOX 5 San Diego", title: "Robbins in court — FOX 5", slug: "robbins-in-court-fox5" },
  /* --- Trayers trial, 2012 --- */
  { case: "trayers", outlet: "NBC — The Today Show", title: "The Today Show covers the Trayers trial", slug: "trayers-today-show-01-30" },
  { case: "trayers", outlet: "NBC — The Today Show", title: "Today Show follow-up coverage", slug: "trayers-today-show-02-01" },
  { case: "trayers", outlet: "CNN Headline News", title: "CNN Headline News — Trayers trial", slug: "trayers-cnn-headline-news" },
  { case: "trayers", outlet: "CNN / HLN", title: "Jane Velez-Mitchell — Trayers trial", slug: "trayers-cnn-jane-velez" },
  { case: "trayers", outlet: "CNN", title: "Verdict announcement — live coverage", slug: "trayers-cnn-verdict-announcement" },
  { case: "trayers", outlet: "CBS 8 San Diego", title: "Trayers verdict — CBS 8", slug: "trayers-verdict-cbs8" },
  { case: "trayers", outlet: "KUSI News", title: "Trayers verdict — KUSI", slug: "trayers-verdict-kusi" },
  { case: "trayers", outlet: "FOX 5 San Diego", title: "Trayers verdict — FOX 5", slug: "trayers-verdict-fox5" },
  { case: "trayers", outlet: "CW6 San Diego", title: "Trayers verdict — CW6", slug: "trayers-verdict-cw6" },
  { case: "trayers", outlet: "CBS 8 San Diego", title: "Trial coverage — January 30", slug: "trayers-cbs8-01-30" },
  { case: "trayers", outlet: "CBS 8 San Diego", title: "Trial coverage — January 31", slug: "trayers-cbs8-01-31" },
  { case: "trayers", outlet: "CBS 8 San Diego", title: "Trial coverage — February 1", slug: "trayers-cbs8-02-01" },
  { case: "trayers", outlet: "ABC 10News", title: "Trial coverage — January 25", slug: "trayers-abc10-01-25" },
  { case: "trayers", outlet: "ABC 10News", title: "Trial coverage — January 26", slug: "trayers-abc10-01-26" },
  { case: "trayers", outlet: "Courtroom Footage", title: "Trial coverage — February 9", slug: "trayers-trial-coverage-02-09" },
  /* --- Fatal dog mauling case, 2011 --- */
  { case: "mauling", outlet: "KUSI News", title: "Fatal dog mauling case — KUSI 10pm", slug: "dog-mauling-kusi" },
  { case: "mauling", outlet: "ABC 10News", title: "Fatal dog mauling case — ABC 10 5pm", slug: "dog-mauling-abc10" },
  { case: "mauling", outlet: "CBS 8 San Diego", title: "Fatal dog mauling case — CBS 8 5pm", slug: "dog-mauling-cbs8" },
  { case: "mauling", outlet: "FOX 5 San Diego", title: "Deadly dog mauling case — FOX 5 10pm", slug: "dog-mauling-fox5" },
  /* --- Commentary & recent appearances --- */
  { case: "commentary", outlet: "NBC News", title: "Carlsbad hiker murder — legal commentary", slug: "carlsbad-hiker-murder-nbc-commentary" },
  { case: "commentary", outlet: "CNN Newsroom", title: "CNN Newsroom — Carlos Norman case with Marc Kohnen", slug: "cnn-newsroom-carlos-norman" },
  { case: "commentary", outlet: "NBC San Diego", title: "Scholder sentencing — NBC coverage (2025)", slug: "scholder-sentencing-nbc-2025" },
  { case: "commentary", outlet: "TV News", title: "Marc Kohnen news appearance (2026)", slug: "marc-kohnen-news-2026" },
  { case: "commentary", outlet: "NBC San Diego", title: "NBC interview with Marc Kohnen (2020)", slug: "marc-kohnen-nbc-interview-2020" },
  { case: "commentary", outlet: "TV News", title: "San Diego defense lawyer Marc Kohnen — news story", slug: "san-diego-defense-lawyer-news-story" },
  { case: "commentary", outlet: "Media Reel", title: "Marc Kohnen — media appearances reel", slug: "marc-kohnen-media-reel" },
  { case: "commentary", outlet: "Arevalos Case", title: "Arevalos case — interview", slug: "arevalos-nc-interview" },
];

/* Courtroom, rally and press-conference photography from Marc's archive. */
export const PHOTOS = [
  { case: "branch", title: "Courthouse-steps rally, Robert Branch case", src: "/assets/photos/robert-branch-courthouse-steps-rally-highlight.jpg" },
  { case: "branch", title: "Addressing supporters outside court", src: "/assets/photos/robert-branch-courthouse-steps-rally.jpg" },
  { case: "branch", title: "NOT GUILTY — celebrating the verdict", src: "/assets/photos/robert-branch-not-guilty-celebration.jpg" },
  { case: "branch", title: "Post-trial press conference", src: "/assets/photos/not-guilty-press-conference-post-trial.jpg" },
  { case: "branch", title: "With Robert Branch in the courtroom", src: "/assets/photos/marc-kohnen-robert-branch-courtroom.jpg" },
  { case: "robbins", title: "Peter Robbins press conference", src: "/assets/photos/peter-robbins-press-conference.jpg" },
  { case: "mauling", title: "Union-Tribune photo — dog mauling case", src: "/assets/photos/union-tribune-dog-mauling-photo.jpg" },
  { case: "mauling", title: "In court — Union-Tribune photo", src: "/assets/photos/union-tribune-courtroom-photo.jpg" },
  { case: "commentary", title: "Carlson sentencing — news coverage", src: "/assets/photos/carlson-sentencing-news-coverage.jpg" },
  { case: "commentary", title: "NBC 7 interview — Deputy Fisher case", src: "/assets/press/marc-kohnen-nbc7-deputy-fisher-interview.jpg" },
  { case: "commentary", title: "Van Vleet case — court appearance coverage", src: "/assets/cases/van-vleet-case-photo-1.jpg" },
  { case: "commentary", title: "Van Vleet case — news coverage", src: "/assets/cases/van-vleet-case-photo-2.jpg" },
  { case: "commentary", title: "Van Vleet case — news coverage", src: "/assets/cases/van-vleet-case-photo-3.jpg" },
  { case: "commentary", title: "Van Vleet case — news coverage", src: "/assets/cases/van-vleet-case-photo-4.jpg" },
  { case: "commentary", title: "Van Vleet case — news coverage", src: "/assets/cases/van-vleet-case-photo-5.jpg" },
];

export const videoSrc = (v) => `/media/${v.slug}.mp4`;
export const videoPoster = (v) => `/media/posters/${v.slug}.jpg`;
