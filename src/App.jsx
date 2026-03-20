import { useEffect, useMemo, useState } from "react";
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
  const [typedText, setTypedText] = useState("");
  const [showFinale, setShowFinale] = useState(false);

  const photos = useMemo(
    () => [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
    []
  );

  const reasons = [
    "Sebab awak selalu buat saya rasa tenang ❤️",
    "Sebab senyuman awak paling cantik di mata saya 😊",
    "Sebab awak sentiasa ada untuk saya walaupun dalam masa susah 🤍",
    "Sebab dengan awak, semuanya rasa lebih indah 🌙",
    "Sebab saya boleh jadi diri saya sendiri bila bersama awak ✨",
    "Sebab saya memang sayang awak, sepenuh hati 💕",
  ];

  const fullLetter =
    "Sayang, Raya ini terasa lebih indah sebab awak ada dalam hidup saya. " +
    "Setiap detik bersama awak adalah kenangan yang paling saya hargai. " +
    "Terima kasih sebab sentiasa memahami saya, menyokong saya, dan menceriakan hari-hari saya. " +
    "Saya harap ini hanyalah permulaan kepada lebih banyak Raya, lebih banyak kenangan, dan lebih banyak kebahagiaan yang kita akan cipta bersama. " +
    "Saya sayang awak, hari ini dan selalu. ❤️";

  const storyMoments = [
    {
      title: "Awak dalam hidup saya",
      text: "Sejak awak hadir, hidup saya rasa lebih tenang, lebih ceria, dan lebih bermakna.",
    },
    {
      title: "Kenangan kecil, makna besar",
      text: "Setiap gambar, setiap senyuman, setiap detik bersama awak jadi sesuatu yang saya simpan dalam hati.",
    },
    {
      title: "Harapan saya",
      text: "Saya cuma nak lebih banyak masa, lebih banyak ketawa, dan lebih banyak Raya yang kita sambut bersama.",
    },
  ];

  useEffect(() => {
    if (!opened) return;

    const slideInterval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(slideInterval);
  }, [opened, photos.length]);

  useEffect(() => {
    if (!opened) return;

    let index = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      index += 1;
      setTypedText(fullLetter.slice(0, index));

      if (index >= fullLetter.length) {
        clearInterval(typingInterval);
      }
    }, 24);

    return () => clearInterval(typingInterval);
  }, [opened, fullLetter]);

  useEffect(() => {
    if (!opened) return;

    const finaleTimer = setTimeout(() => {
      setShowFinale(true);
    }, 2500);

    return () => clearTimeout(finaleTimer);
  }, [opened]);

  return (
    <div className="page-shell">
      <div className="gold-glow gold-glow-1"></div>
      <div className="gold-glow gold-glow-2"></div>

      <div className="stars">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="star"></span>
        ))}
      </div>

      <div className="floating-photos">
        {photos.slice(0, 5).map((img, i) => (
          <img key={i} src={img} alt={`Memory ${i + 1}`} loading="lazy" />
        ))}
      </div>

      {!opened ? (
        <section className="hero">
          <div className="crescent-wrap">
            <div className="crescent"></div>
          </div>

          <p className="eyebrow">Mesej Raya Istimewa</p>
          <h1>Selamat Hari Raya, Meeta 🌙</h1>
          <p className="hero-subtitle">
            Kad kecil, penuh dengan cinta, kenangan, dan tempat di hati saya
            itu hanya milik anda.
          </p>

          <div className="envelope" onClick={() => setOpened(true)}>
            <div className="envelope-flap"></div>
            <div className="envelope-body">
              <span className="seal">💌</span>
              <p>Buka Kad Raya</p>
            </div>
          </div>

          <p className="tap-hint">Sentuh di sini</p>
        </section>
      ) : (
        <main className="content">
          <section className="hero-opened reveal">
            <p className="eyebrow">Untuk yang tersayang</p>
            <h1>Selamat Hari Raya, Meeta 🌙</h1>
            <h2>Untuk Yang Paling Istimewa Di Hati Saya ❤️</h2>
          </section>

          <section className="letter-section reveal">
            <div className="letter-card">
              <div className="letter-top">
                <span className="mini-badge">Daripada hatiku</span>
              </div>

              <p className="letter-text">{typedText}</p>

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
          </section>

          <section className="slideshow-section reveal">
            <div className="section-heading">
              <p className="eyebrow">Mengimbau kembali</p>
              <h3>Kenangan Kita ✨</h3>
            </div>

            <div className="slideshow-frame">
              <img
                src={photos[photoIndex]}
                alt={`Photo ${photoIndex + 1}`}
                className="main-photo"
              />
              <div className="photo-overlay">
                <span>{photoIndex + 1} / {photos.length}</span>
              </div>
            </div>

            <div className="thumbnail-row">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  className={`thumb ${photoIndex === index ? "active" : ""}`}
                  onClick={() => setPhotoIndex(index)}
                  aria-label={`Show photo ${index + 1}`}
                >
                  <img src={photo} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          </section>

          <section className="story-section reveal">
            <div className="section-heading">
              <p className="eyebrow">Cerita kita</p>
              <h3>Awak Dan Saya 💫</h3>
            </div>

            <div className="story-grid">
              {storyMoments.map((item, index) => (
                <div key={index} className="story-card">
                  <div className="story-number">0{index + 1}</div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="gallery-section reveal">
            <div className="section-heading">
              <p className="eyebrow">Detik yang dirakam</p>
              <h3>Lebih Banyak Gambar Kita 📸</h3>
            </div>

            <div className="gallery-grid">
              {photos.map((photo, index) => (
                <div className="gallery-card" key={index}>
                  <img src={photo} alt={`Gallery ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>

          {showFinale && (
            <section className="finale reveal">
              <div className="finale-card">
                <p className="eyebrow">Satu perkara terakhir</p>
                <h3>Saya Bersyukur Sangat Sebab Ada Awak 🌙</h3>
                <p>
                  Semoga Raya ini membawa kebahagiaan, ketenangan, dan lebih
                  banyak cinta untuk kita berdua.
                </p>
                <p className="final-line">Saya sayang awak, Meeta ❤️</p>
              </div>
            </section>
          )}
        </main>
      )}
    </div>
  );
}