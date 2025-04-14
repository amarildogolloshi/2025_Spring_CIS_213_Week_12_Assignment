
const MemeGenerator = ({memeImg, memeText}) => {

    return (
        <div className="meme-generator">
            {
                memeImg != null ? (
                    <img src={memeImg.url} alt={memeImg.name} />
                ): null
            }
            <p className="top" >{memeText.top}</p>
            <p className="bottom" >{memeText.bottom}</p>
        </div>
    )
    
}

export default MemeGenerator;