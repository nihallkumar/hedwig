const nodeEnv = process.env.NODE_ENV;

let reload = '<script src="//localhost:9091/livereload.js?snipver=1"></script>';
let icons = '<script id="hw-icons" src="http://localhost:3001/icons.min.js"></script>';
const pikaday = '<script src="https://cdn.jsdelivr.net/npm/pikaday@1.8.0/pikaday.min.js"></script>';

if (nodeEnv === 'staging') {
  reload = '';
  icons = '<script id="hw-icons" src="./icons.min.js"></script>';
}

if (nodeEnv === 'production') {
  reload = '';
  icons =
    '<script id="hw-icons" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/dist/icons.min.js"></script>';
}

module.exports = `
    <!doctype html>
    <html class="no-js">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Hedwig - Posten</title>
      ${pikaday}
      <link rel="icon" type="image/x-icon" href="https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/assets/favicon.ico" />
      <style>
        
        body, html {
          font-size: 20px;
        }

        body {
          margin: 0;
          background: #f2f2f2;
          color: #444444;
        }

        .hw-helpers-margin-highlighter {
          background-color: #f9cc9d;
          display: inline-block;
          width: 100%;
          margin-bottom: 24px;
        }
        .hw-helpers-margin-highlighter > div {
            background-color: #C3E0B7;
        }
        .hw-helpers-margin-highlighter > div > p {
            background-color: rgb(242, 242, 242);
        }

        .hw-helpers-highlight {
          background-color: #048ebb;
          color: white;
          padding: 12px;
        }

        .hw-helpers-icon {
          display: inline-block;
          width: 90px;
          text-align: center;
          font-size: 12px;
          padding: .5rem;
          margin: .5rem;
        }

        .hw-helpers-icon .hw-icon {
          margin: .5rem;
          background: white;
          width: 60px;
          height: 60px;
          padding: 10px;
          border: 1px solid #eee;
        }

        .hw-helpers-icon--service {
          width: 130px;
        }

        .hw-helpers-icon--service-wide {
          width: 185px;
        }

        .hw-helpers-icon--service .hw-icon {
          width: 100px;
          height: 100px;
        }

        .hw-helpers-icon--service-wide .hw-icon {
          width: 155px;
          height: 100px;
        }


        /**
          * Switcher styles
          */

        .hw-app-switcher {
          position: absolute;
          right: 0;
          top: 0;
          height: 49px;
          background: #3a3a3a;
          text-align: right;
          z-index: 1;
          opacity: 0;
          animation: hw-app-switcher-show 1s linear;
          animation-delay: 1s;
          animation-fill-mode: forwards;
        }
        @keyframes hw-app-switcher-show {
          from {opacity: 0;}
          to {opacity: 1;}
        }

        @media (min-width: 1000px) {
          .hw-app-switcher {
            margin-left: 251px;
            left: 0;
          }
        }

        .hw-app-switcher__link {
          font-family: Posten Sans Regular;
          width: 120px;
          display: inline-block;
          padding: 10px 20px;
          color: white;
          text-align: center;
        }
        .hw-app-switcher__link--active {
          font-family: Posten Sans Medium;
          background-color: #e32d22;
        }


        /**
         * Modifications for Catalog
         */

        .HeadingLink {
          line-height: 0px; /* Fixes jumping of content when hovering an inline anchor */
        }
        [class$="-Image"], [class$="-Image"] p {
            font-size: 0.8rem !important;
        }
        [class$="-Span"] {
            margin-bottom: 20px !important;
        }
        [class$="-Span"] > [class$="-Image"] {
            margin-bottom: 20px !important;
        }
        [class$="headingStyle"] {
            margin-top: 2rem !important;
        }
        [class$="h1-headingStyle"] {
            margin-top: 4rem !important;
        }
        [class$="h2-headingStyle"] {
            margin-top: 4rem !important;
        }
      </style>
    </head>
    <body>
      <nav class="hw-app-switcher">
        <a class="hw-app-switcher__link" href="/bring.html#/">Bring</a>
        <a class="hw-app-switcher__link hw-app-switcher__link--active" href="/posten.html#/">Posten</a>
      </nav>
      <div id="catalog"></div>
      <script src="https://unpkg.com/catalog@3/dist/catalog-standalone.min.js"></script>
      <script src="docs-config-posten.js"></script>
      ${icons}
      ${reload}
    </body>
    </html>
`;
