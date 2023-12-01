import React from 'react'
import { storage } from './config/firebase'
import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios"
export default function App() {
  const changeImage = (e) => {
    let file = e.target.files[0]
    console.log("111111", file.name);
    setImageUpload(file);
  }
  const [imageUpload, setImageUpload] = useState(null);
  const [urlImage, setUrlImage] = useState(null)
  const [productName, setProductName] = useState("")
  const handleAdd = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("11111111", url);
        setUrlImage(url)
        let product={
          name:productName,
          image:url,
        }
        // console.log(product);
        axios.post("http://localhost:6000/product",product)


      });
    });
  }
  
  return (
    <>
      <h1>Firebase</h1>
      <label htmlFor="">Name</label>
      <input 
      onChange={(e)=>setProductName(e.target.value)}
      type="text" /> <br />
      <label htmlFor="">Image</label>


      <input
        type="file"
        onChange={changeImage}
      /> <br />
      <button onClick={handleAdd}>Add file</button>
      <img src={urlImage} alt="" />
    </>
  )
}
