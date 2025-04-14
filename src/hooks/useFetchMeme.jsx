import { useEffect, useState } from "react";

const useFetchMeme = (memeText) => {
  const [memeImg, setMemeImg] = useState(null);

  useEffect(() => {
    if (memeText.top && memeText.bottom) {
      fetch(`https://api.imgflip.com/get_memes`)
        .then((response) => response.json())
        .then((json) => {
          if (json.data.memes.length > 0) {
            const randomIndex = Math.floor(Math.random() * json.data.memes.length);
            setMemeImg(json.data.memes[randomIndex]);
          }
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    }
  }, [memeText]);

  return memeImg;
};

export default useFetchMeme;