import { useState } from "react";

import btnImage from "../assets/image.png"

const Form = ({memeText, setMemeText}) => {

    const [topText, setTopText] = useState(memeText.top);
    const [bottomText, setBottomText] = useState(memeText.bottom);


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("handle submit")

        const currentText = {
            top:topText,
            bottom:bottomText
        }

        setMemeText(currentText)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group">
                <div className="group-input-group">
                    <div className="input-group">
                        <label>Top Text:</label>
                        <input 
                            type="text" 
                            value={topText}
                            onChange={ (e) => { setTopText(e.target.value) } }
                            placeholder="Top Text" />
                    </div>

                    <div className="input-group">
                        <label>Bottom Text:</label>
                        <input 
                            type="text" 
                            value={bottomText}
                            onChange={ (e) => { setBottomText(e.target.value) } }
                            placeholder="Bottom text" />
                    </div>
                </div>

                <div className="input-group">
                    <button type="submit">
                        Get a new meme image
                        <img src={btnImage} alt="Button image" />
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Form