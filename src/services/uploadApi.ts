export const uploadImage = async (pics: File) => {
  if (pics.type.includes("image")) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "Chat-App");
    data.append("cloud_name", "jai-image");
    const uploadedData = await fetch(
      "https://api.cloudinary.com/v1_1/jai-image/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    return uploadedData;
  } else {
    throw new Error("Not an image");
  }
};
