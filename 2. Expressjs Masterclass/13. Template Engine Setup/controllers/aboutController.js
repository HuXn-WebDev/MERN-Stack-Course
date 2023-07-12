import { join } from "path";

const aboutController = (req, res) => {
  // res.send("About page");
  res.sendFile(join(process.cwd(), "views", "about.html"));
};

export { aboutController };
