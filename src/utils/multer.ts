import multer from "multer";

const upload = multer({ dest: "/tmp" });

export default upload;
