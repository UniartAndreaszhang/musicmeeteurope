/*
  Music Meets Europe — the only file you need to edit for dates, cities,
  venues, pictures, contact details, and the main sentences.

  How to publish a change: README.md (English and 中文).

  Rules that keep the page working:
  - Edit the words inside quotes. Keep the quotes, commas, and brackets.
  - A comma after the last item in a list is fine.
  - Do not delete the line that says: root.MME_PROGRAMME
  - Text between *asterisks* is shown in gold italics, for example *Vienna*.
  - HTML tags are not read as code; they show up as plain text.
  - Image paths start from the site root (the folder that contains index.html),
    for example "images/petit-palau-stage.jpg".
    Upload the picture to the repository first, then put its path here.
  - theme "a" is a gold card. theme "b" is a blue card.
  - The three numbers in About (sessions, cities, year) are counted from
    this file. Change `year` and the `sessions` list; do not type those totals.
*/
(function (root) {
  root.MME_PROGRAMME = {
    festival: "Music Meets Europe",
    year: 2027,
    established: 2011,
    contactEmail: "info@musicmeetseurope.eu",
    website: "https://www.musicmeetseurope.eu",

    /* Short lines used on the map and as the hero sentence if hero.subtitle is empty. */
    tagline: "Music connecting generations and cultures.",
    bond: "Music — a bond of friendship and exchange.",

    hero: {
      eyebrow: "International Music Festival 2027 · Est. 2011",
      titleLead: "Music",
      titleEm: "Meets Europe",
      subtitle: "Music connecting generations and cultures — a bond of friendship and exchange.",
      editionNote: "2027 programme",
    },

    about: {
      label: "About the Festival",
      title: "A bond of *friendship* and exchange",
      paragraphs: [
        "Music Meets Europe brings musicians of different generations and cultures onto the same stage. What begins as a concert becomes a bond of friendship and exchange.",
        "In 2027 the festival meets four times. The 12th Music Meets Europe is a winter session through Zagreb, Mürzzuschlag and Vienna. The 13th Music Meets Europe continues in summer: Spain and France, Western Europe, and Eastern Europe.",
      ],
      video: "logo 1.mp4",
      badge: { value: "’27", label: "Programme" },
      stats: { sessions: "Sessions", cities: "Cities", year: "Year" },
    },

    nav: [
      { label: "About", href: "#about" },
      { label: "Sessions", href: "#routes" },
      { label: "Stages", href: "#events" },
    ],

    sessionsIntro: {
      eyebrow: "2027 programme",
      title: "Four *sessions* across Europe",
    },

    /*
      One object per session. Copy a whole block, from { to }, to add another.
      titleLines: each string is one line on the card. *asterisks* = gold italics.
      cities: shown as the route, in order.
      highlights: the practical lines (halls and dates). Do not invent a hall.
    */
    sessions: [
      {
        theme: "a",
        tag: "12th · Winter Session",
        titleLines: ["Zagreb · Mürzzuschlag", "*· Vienna*"],
        dateLabel: "28–31 January 2027",
        cities: [
          { name: "Zagreb", country: "Croatia" },
          { name: "Mürzzuschlag", country: "Austria" },
          { name: "Vienna", country: "Austria" },
        ],
        description: "The 12th Music Meets Europe opens the year in winter, between Zagreb, Mürzzuschlag and Vienna.",
        highlights: [
          "Croatian National Theatre, Zagreb",
          "Mürzzuschlag",
          "Musikverein, Golden Hall, Vienna",
        ],
        enquireLabel: "Enquire about the Winter Session",
        mark: "XII",
      },
      {
        theme: "b",
        tag: "13th · Spain & France",
        titleLines: ["Barcelona", "*· Paris*"],
        dateLabel: "13–18 July 2027",
        cities: [
          { name: "Barcelona", country: "Spain" },
          { name: "Paris", country: "France" },
        ],
        description: "One of the 13th Music Meets Europe sessions. It opens at the Petit Palau in Barcelona on 13 July and shares the 18 July concert in Paris with the Western Europe session.",
        highlights: [
          "13 July — Petit Palau, Palau de la Música Catalana, Barcelona",
          "18 July — Maison de la Radio et de la Musique, Paris",
        ],
        enquireLabel: "Enquire about Spain & France",
        mark: "XIII",
      },
      {
        theme: "a",
        tag: "13th · Western Europe",
        titleLines: ["Amsterdam · Brussels", "*· Paris*"],
        dateLabel: "14–18 July 2027",
        cities: [
          { name: "Amsterdam", country: "Netherlands" },
          { name: "Brussels", country: "Belgium" },
          { name: "Paris", country: "France" },
        ],
        description: "Runs in the same week as Spain & France. Amsterdam on 14 July, Brussels on 16 July, and Paris on 18 July.",
        highlights: [
          "14 July — Muziekgebouw aan 't IJ, Amsterdam",
          "16 July — Flagey, Brussels",
          "18 July — Maison de la Radio et de la Musique, Paris",
        ],
        enquireLabel: "Enquire about Western Europe",
        mark: "XIII",
      },
      {
        theme: "b",
        tag: "13th · Eastern Europe",
        titleLines: ["Zagreb · Bratislava", "*· Vienna*"],
        dateLabel: "29 July – 1 August 2027",
        cities: [
          { name: "Zagreb", country: "Croatia" },
          { name: "Bratislava", country: "Slovakia" },
          { name: "Vienna", country: "Austria" },
        ],
        description: "The summer’s eastern session returns to Zagreb and Vienna, with Bratislava on the way.",
        highlights: [
          "29 July — Croatian National Theatre, Zagreb",
          "Bratislava",
          "31 July – 1 August — Musikverein, Golden Hall, Vienna",
        ],
        enquireLabel: "Enquire about Eastern Europe",
        mark: "XIII",
      },
    ],

    map: {
      eyebrow: "Festival map",
      title: "Summer *route*",
      image: "images/summer-route-2027.png",
      alt: "Summer 2027 route map: 1 Barcelona 13 July, 2 Amsterdam 14 July, 3 Brussels 16 July, 4 Paris 18 July, 5 Zagreb 29 July, 6 Vienna 31 July to 1 August.",
      caption: "13 July – 1 August 2027, from Barcelona to Vienna. The January winter session is the first card above; it is not drawn on this map.",
    },

    poster: {
      eyebrow: "At a glance",
      title: "The 2027 *programme*",
      image: "images/programme-poster-2027.jpg",
      alt: "Poster of Music Meets Europe 2027: Winter Session 28–31 January in Zagreb, Mürzzuschlag and Vienna; Spain and France 13–18 July; Western Europe 14–18 July; Eastern Europe 29 July–1 August.",
      caption: "The same sessions, dates and halls as the cards on this page.",
    },

    eventsIntro: {
      eyebrow: "Stages and stops",
      title: "Where the music *is heard*",
    },

    /*
      One card per hall or city stop. `when` may use a new line.
      image may be "" when there is no photograph yet.
    */
    events: [
      {
        when: "13 July 2027\nSpain & France",
        title: "Petit Palau",
        location: "Palau de la Música Catalana, Barcelona",
        image: "images/petit-palau-stage.jpg",
        imageAlt: "Petit Palau in Barcelona, looking toward the stage and the red chairs",
      },
      {
        when: "14 July 2027\nWestern Europe",
        title: "Muziekgebouw aan 't IJ",
        location: "Amsterdam, Netherlands",
        image: "",
        imageAlt: "",
      },
      {
        when: "16 July 2027\nWestern Europe",
        title: "Flagey",
        location: "Brussels, Belgium",
        image: "",
        imageAlt: "",
      },
      {
        when: "18 July 2027\nSpain & France · Western Europe",
        title: "Maison de la Radio et de la Musique",
        location: "Radio France, Paris",
        image: "",
        imageAlt: "",
      },
      {
        when: "28–31 January 2027 · Winter Session\n29 July 2027 · Eastern Europe",
        title: "Croatian National Theatre",
        location: "Zagreb, Croatia",
        image: "",
        imageAlt: "",
      },
      {
        when: "28–31 January 2027\nWinter Session",
        title: "Mürzzuschlag",
        location: "Austria",
        image: "",
        imageAlt: "",
      },
      {
        when: "29 July – 1 August 2027\nEastern Europe",
        title: "Bratislava",
        location: "Slovakia",
        image: "",
        imageAlt: "",
      },
      {
        when: "28–31 January 2027 · Winter Session\n31 July – 1 August 2027 · Eastern Europe",
        title: "Musikverein, Golden Hall",
        location: "Vienna, Austria",
        image: "",
        imageAlt: "",
      },
    ],

    enquireLabel: "Enquire",

    venuePhotosIntro: {
      eyebrow: "Venue",
      title: "Petit *Palau*, Barcelona",
    },
    venuePhotos: [
      {
        image: "images/petit-palau-stage.jpg",
        alt: "Petit Palau stage, with a piano and rows of seats",
        caption: "Petit Palau — the stage",
      },
      {
        image: "images/petit-palau-hall.jpg",
        alt: "Petit Palau hall from the side, with the balcony and the stage beyond",
        caption: "Petit Palau — the hall",
      },
    ],

    contact: {
      title: "Join the *journey*",
      text: "Find the right stage for your choir. Programme details and group enquiries.",
      messagePlaceholder: "Tell us about your choir or ensemble, and which 2027 session you have in mind.",
      submitLabel: "Send Message",
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
