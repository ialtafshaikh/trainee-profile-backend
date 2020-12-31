const { dataUri } = require("../config/multerConfig");
const { uploader } = require("../config/cloudinaryConfig");

const uploadImage = (req, res, next) => {
  if (typeof req.file === "undefined") {
    res.status(404);
    return res.json({ message: "you have not uploaded the file" });
  }

  if (process.env.STORAGE_TYPE == "cloud") {
    const file = dataUri(req).content;
    uploader
      .upload(file)
      .then((result) => {
        const image = result.url;
        req.image = image;
        next();
      })
      .catch((err) =>
        res.status(400).json({
          messge: "someting went wrong while processing your request",
          data: {
            err,
          },
        })
      );
  } else {
    req.image = req.file.filename;
    next();
  }
};

module.exports = {
  uploadImage,
};
