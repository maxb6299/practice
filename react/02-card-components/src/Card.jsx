import cardPicture from './assets/placeholder.png'

function Card() {
    return (
        <>
            <div className='card'>
                <img className='card-picture' src={cardPicture} alt='Card Picture' />
                <h2 className='card-title'>Max</h2>
                <p className='card-text'>Hi, I'm Max. I like to program and read books.</p>
            </div>
        </>
    )
}

export default Card