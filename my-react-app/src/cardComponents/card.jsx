import ProfilePic from './assets/cat.jpg'

function Card(){
    return(
        <div className="card">
            <img className='image' src={ProfilePic} alt="profile picture" />
            <h2 className='title'>Cat</h2>
            <p className='text'>meow meow meow!!!</p>
        </div>
    )
}

export default Card