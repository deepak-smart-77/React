import ProfilePic from './assets/cat.jpg'

function ProfilePicture(){
    // const imgUrl = './src/assets/cat.jpg'
    const handleClick = (e) => e.target.style.display = "none"
    return(
        <img onClick={(e) => handleClick(e)} src={ProfilePic} />
    )
}
export default ProfilePicture