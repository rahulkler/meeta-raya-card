import { useState, useEffect } from "react";
import "./App.css";

import img1 from "./assets/images/img1.jpeg";
import img2 from "./assets/images/img2.jpeg";
import img3 from "./assets/images/img3.jpeg";
import img4 from "./assets/images/img4.jpeg";
import img5 from "./assets/images/img5.jpeg";
import img6 from "./assets/images/img6.jpeg";
import img7 from "./assets/images/img7.jpeg";
import img8 from "./assets/images/img8.jpeg";
import img9 from "./assets/images/img9.jpeg";
import img10 from "./assets/images/img10.jpeg";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [reasonIndex, setReasonIndex] = useState(0);

  const photos = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
  ];

  const reasons = [
    "Sebab awak selalu buat saya rasa tenang ❤️",
    "Sebab senyuman awak paling cantik 😊",
    "Sebab awak sentiasa ada untuk saya 🤍",
    "Sebab dengan awak, semuanya rasa cukup 🌙",
    "Sebab… saya memang sayang awak 💕"
  ];

  // slideshow
  useEffect(() => {
    if (!opened) return;
    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [opened]);

  return (
    <div className="container">

      {/* Floating background photos */}
      <div className="floating-photos">
        {photos.slice(0, 5).map((img, i) => (
          <img key={i} src={img} />
        ))}
      </div>

      <h1>Selamat Hari Raya, Meeta 🌙</h1>
      <h2>Untuk Yang Tersayang ❤️</h2>

      {!opened ? (
        <button className="btn" onClick={() => setOpened(true)}>
          Buka Kad Raya 💌
        </button>
      ) : (
        <>
          {/* Love message */}
          <div className="card">
            <p>
              Sayang,
              <br /><br />
              Raya ini terasa lebih bermakna sebab awak ada dalam hidup saya.
              Setiap detik bersama awak adalah kenangan yang paling saya hargai.
              <br /><br />
              Terima kasih sebab sentiasa ada,
              memahami saya, dan menceriakan hari-hari saya.
              <br /><br />
              Saya harap ini hanyalah permulaan
              kepada lebih banyak Raya yang kita akan sambut bersama.
              <br /><br />
              Saya sayang awak ❤️
              <br /><br />
              — Dari saya, untuk awak 🌙
            </p>

            <button
              className="btn secondary"
              onClick={() =>
                setReasonIndex((prev) => (prev + 1) % reasons.length)
              }
            >
              Kenapa Saya Sayang Awak 💖
            </button>

            <p className="reason">{reasons[reasonIndex]}</p>
          </div>

          {/* Slideshow */}
          <div className="slideshow">
            <img src={photos[photoIndex]} />
          </div>
        </>
      )}
    </div>
  );
}