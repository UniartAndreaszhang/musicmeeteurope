/*
  Music Meets Europe — the only file you need to edit for dates, cities,
  venues, pictures, contact details, and the main sentences.

  How to publish a change: README.md (English and 中文).

  Rules that keep the page working:
  - Edit the words inside quotes. Keep the quotes, commas, and brackets.
  - A comma after the last item in a list is fine.
  - Do not delete the line that says: root.MME_PROGRAMME
  - Text between *asterisks* is shown in italics, for example *Vienna*.
  - HTML tags are not read as code; they show up as plain text.
  - Image paths start from the site root (the folder that contains index.html),
    for example "images/halls/petit-palau-barcelona.jpg".
    Upload the picture to the repository first, then put its path here.
  - theme is kept so older notes still parse. The page does not use it for colour.
  - The three numbers in About (sessions, cities, year) are counted from
    this file. Change `year` and the `sessions` list; do not type those totals.
*/
(function (root) {
  root.MME_PROGRAMME = {
    festival: "Music Meets Europe",
    /* Horizontal logo in the header. SVG stays sharp on the white bar. */
    logo: "images/mme-logo.svg",
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
      image: "images/hero-musikverein.webp",
      imageAlt: "Orchestra and choir performing in the Golden Hall of the Musikverein, Vienna",
      imagePosition: "center 42%",
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
      { label: "Halls", href: "#events" },
      { label: "Route", href: "#map" },
      { label: "Contact", href: "#contact" },
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
        image: "images/halls/croatian-national-theatre-zagreb.jpg",
        imageAlt: "The auditorium of the Croatian National Theatre in Zagreb",
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
        image: "images/halls/petit-palau-barcelona.jpg",
        imageAlt: "Petit Palau in Barcelona",
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
        image: "images/halls/muziekgebouw-amsterdam.jpg",
        imageAlt: "The concert hall of Muziekgebouw aan 't IJ in Amsterdam",
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
        image: "images/halls/musikverein-golden-hall.jpg",
        imageAlt: "The Golden Hall of the Musikverein in Vienna",
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
      eyebrow: "Stages",
      title: "Where the music *is heard*",
      pendingTitle: "Stops still to be confirmed",
    },

    /*
      One card per confirmed hall, then any city whose hall is not confirmed yet.
      Do not add a hall name or a photograph for Mürzzuschlag or Bratislava until
      the festival confirms them.
      `when` may use a new line. `description` is one or two sentences.
      `image` may be "" when there is no photograph.
      If `image` is set, keep `credit`: author, licence name, and the three links.
      The page prints that credit under the card. Do not delete it.
    */
    events: [
      {
        when: "13 July 2027\nSpain & France",
        title: "Petit Palau",
        location: "Palau de la Música Catalana, Barcelona",
        description: "The chamber hall of the Palau de la Música Catalana. The Spain and France session opens here on 13 July.",
        image: "images/halls/petit-palau-barcelona.jpg",
        imageAlt: "Petit Palau in Barcelona, with the stage, a piano, and rows of seats",
        credit: {
          author: "Josep Renalias",
          authorUrl: "https://commons.wikimedia.org/wiki/File:Palau_de_la_M%C3%BAsica_-_Petit_Palau.JPG",
          licence: "CC BY-SA 3.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Palau_de_la_M%C3%BAsica_-_Petit_Palau.JPG",
        },
      },
      {
        when: "14 July 2027\nWestern Europe",
        title: "Muziekgebouw aan 't IJ",
        location: "Amsterdam, Netherlands",
        description: "The concert hall on the IJ in Amsterdam. Western Europe plays here on 14 July.",
        image: "images/halls/muziekgebouw-amsterdam.jpg",
        imageAlt: "The concert hall of Muziekgebouw aan 't IJ in Amsterdam",
        credit: {
          author: "Jorge Royan",
          authorUrl: "https://www.royan.com.ar",
          licence: "CC BY-SA 3.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Amsterdam_-_Muziekgebouw_-_0408.jpg",
        },
      },
      {
        when: "16 July 2027\nWestern Europe",
        title: "Flagey",
        location: "Brussels, Belgium",
        description: "Studio 4 at Flagey, in the former Belgian radio building in Brussels. Western Europe, 16 July.",
        image: "images/halls/flagey-brussels.jpg",
        imageAlt: "Studio 4 at Flagey in Brussels, with the organ and the empty stage",
        credit: {
          author: "Zinneke",
          authorUrl: "https://commons.wikimedia.org/wiki/File:Flagey_interior_2013-09_--11.jpg",
          licence: "CC BY-SA 3.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Flagey_interior_2013-09_--11.jpg",
        },
      },
      {
        when: "18 July 2027\nSpain & France · Western Europe",
        title: "Maison de la Radio et de la Musique",
        location: "Radio France, Paris",
        description: "The auditorium of Radio France in Paris. The Spain and France and Western Europe sessions share this concert on 18 July.",
        image: "images/halls/radio-france-paris.jpg",
        imageAlt: "The auditorium of Radio France in Paris during a concert",
        credit: {
          author: "Christophe Abramowitz / Radio France",
          authorUrl: "https://commons.wikimedia.org/wiki/File:Auditorium_de_Radio_France.jpg",
          licence: "CC BY-SA 4.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Auditorium_de_Radio_France.jpg",
        },
      },
      {
        when: "28–31 January 2027 · Winter Session\n29 July 2027 · Eastern Europe",
        title: "Croatian National Theatre",
        location: "Zagreb, Croatia",
        description: "The main house of the Croatian National Theatre in Zagreb. Winter Session, 28–31 January, and Eastern Europe on 29 July.",
        image: "images/halls/croatian-national-theatre-zagreb.jpg",
        imageAlt: "The stage and auditorium of the Croatian National Theatre in Zagreb",
        credit: {
          author: "Bernard Gagnon",
          authorUrl: "https://commons.wikimedia.org/wiki/File:Interior_of_Croatian_National_Theater,_Zagreb_07.jpg",
          licence: "CC BY-SA 4.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Interior_of_Croatian_National_Theater,_Zagreb_07.jpg",
        },
      },
      {
        when: "28–31 January 2027\nWinter Session",
        title: "Mürzzuschlag",
        location: "Austria",
        description: "A stop on the winter route, 28–31 January. No hall is confirmed for Mürzzuschlag yet.",
        image: "",
        imageAlt: "",
      },
      {
        when: "29 July – 1 August 2027\nEastern Europe",
        title: "Bratislava",
        location: "Slovakia",
        description: "A city on the Eastern Europe route, 29 July – 1 August. No hall is confirmed for Bratislava yet.",
        image: "",
        imageAlt: "",
      },
      {
        when: "28–31 January 2027 · Winter Session\n31 July – 1 August 2027 · Eastern Europe",
        title: "Musikverein, Golden Hall",
        location: "Vienna, Austria",
        description: "The Großer Saal of the Musikverein in Vienna. Winter Session, 28–31 January, and Eastern Europe, 31 July – 1 August.",
        image: "images/halls/musikverein-golden-hall.jpg",
        imageAlt: "The Golden Hall of the Musikverein in Vienna, looking toward the organ",
        credit: {
          author: "Clemens Pfeiffer",
          authorUrl: "https://commons.wikimedia.org/wiki/File:Musikverein_Goldener_Saal.jpg",
          licence: "CC BY-SA 3.0",
          licenceUrl: "https://creativecommons.org/licenses/by-sa/3.0",
          sourceName: "Wikimedia Commons",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Musikverein_Goldener_Saal.jpg",
        },
      },
    ],

    enquireLabel: "Enquire",

    /* Optional extra photographs. Leave this list empty to hide the block.
       Hall photographs belong on the cards above, with a credit. */
    venuePhotosIntro: {
      eyebrow: "",
      title: "",
    },
    venuePhotos: [],

    contact: {
      title: "Join the *journey*",
      text: "Find the right stage for your choir. Programme details and group enquiries.",
      messagePlaceholder: "Tell us about your choir or ensemble, and which 2027 session you have in mind.",
      submitLabel: "Send Message",
    },
  };
})(typeof window !== "undefined" ? window : globalThis);
