import App from "./App";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";

import { handleServerRequest } from "@react-navigation/web";
// import handleServerRequest from "@react-navigation/web/dist/handleServerRequest";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const { path, query } = req;

    const { navigation, title, options } = handleServerRequest(
      App.router,
      path,
      query
    );

    const markup = renderToString(<App navigation={navigation} />);

    res.status(200).send(
      `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>${title}</title>
        <style id="root-stylesheet">
        html, body, #root {
          width: 100%;
          height: 100%;
          background-color: ${options.pageColor || "white"};
        }
        </style>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
    );
  });

export default server;
