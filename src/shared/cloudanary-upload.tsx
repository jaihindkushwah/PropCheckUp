import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: "jai-image" } });

  const img = cld
    .image("cld-sample-5")
    .format("auto") // Optimize delivery by resizing and applying auto-format and auto-quality
    .quality("auto")
    .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return <AdvancedImage cldImg={img} />;
};

export default App;

// if(pics.type==="image/jpeg" || pics.type==='image/png'){
//   const data=new FormData();
//   data.append('file',pics);
//   data.append("upload_preset","Chat-App");
//   data.append("cloud_name","jai-image");
//   fetch("https://api.cloudinary.com/v1_1/jai-image/image/upload",{
//       method:'post',
//       body:data
//   })
//   .then((res)=>res.json())
//   .then((res)=>{
//       setLoading(false);
//       setPic(res.url.toString());
//   })
//   .catch((err)=>{
//       console.log(err);
//       setLoading(false);
//   })
// }
