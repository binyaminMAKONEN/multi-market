import axios from "axios";
import { useState } from "react"


function InputUploadImage(props) {

  const [imageUrl, setImageUrl] = useState("")


    const handleImageUpload = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'M-markt');
      

        axios.post(`https://api.cloudinary.com/v1_1/deqshtozk/image/upload`, formData).then((res) => {
          setImageUrl(res.data.secure_url);
        }).catch((err) => {
          console.error(err);
        });
      }
      
    
  return (
    <div>
        <input type="file" onChange={(e) =>{ props.setImage(imageUrl);handleImageUpload(e.target.files[0])}} />
        <img src={imageUrl} alt="" />
    </div>
  )
}

export default InputUploadImage