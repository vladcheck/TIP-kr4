import { useState } from "react";
import "./index.css";

const AVATAR_BANK = [
  "lycaon.png",
  "vivian.png",
  "nicole.png",
  "anby.png",
  "billy.png",
];

function getRandomAvatarLink(): string {
  return AVATAR_BANK[Math.floor(Math.random() * AVATAR_BANK.length)];
}

export default function App() {
  const [avatarLink, setAvatarLink] = useState<string>("");

  const getAlt = () =>
    avatarLink.length ? avatarLink.replace(".png", "") : "none";

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <header
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Генератор случайных аватарок</h1>
      </header>
      <main>
        {avatarLink.length > 0 ? (
          <img
            src={"./src/assets/" + avatarLink}
            alt={getAlt()}
            style={{
              outline: "1px solid black",
              userSelect: "none",
              width: "300px",
              height: "300px",
              aspectRatio: "1/1",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : null}
        <button
          onClick={() => {
            setAvatarLink(getRandomAvatarLink());
          }}
          style={{ padding: "5px 10px" }}
        >
          Сгенерировать аватарку
        </button>
      </main>
    </div>
  );
}
