import memesData from "../memesData";
import { useState } from 'react'
export default function Generate() {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const memeArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNum].url;
    setMemeImage(url)
  };
  return (
    <main>
      <div className="form" id="form1">
        <div>
          <label>
            Top Text
            <input type="text" className="form--input" placeholder="Shut up" />
          </label>
        </div>
        <div>
          <label>
            Bottom Text
            <input
              type="text"
              className="form--input"
              placeholder="and take my money"
            />
          </label>
        </div>

        <button className="form--button" onClick={getMemeImage}>
          {" "}
          Get a new meme image{" "}
        </button>
      </div>
      <img src={memeImage} />
    </main>
  );
}
