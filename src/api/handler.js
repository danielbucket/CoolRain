import express from "express";

export const handler = express();

// add JSON-Parsing
handler.use(express.json());
handler.use(express.urlencoded({ extended:true }));

handler.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});

applyRouters(
  (props) => {
    const { method, route, path, cb } = props;
    if (handler[method]) {
      if (Array.isArray(cb)) {
        handler[method](route, ...cb);
      } else {
        handler[method](route, cb);
      }
    } else {
      console.log("Not Support", method, "for", router, "in", handler);
    }
  }
);