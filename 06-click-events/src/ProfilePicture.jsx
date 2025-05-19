import imageUrl from "./assets/profile.png";

function ProfilePicture() {
    // const imageUrl = './assets/profile.png';
    const handleClick = (e) => {
        e.target.style.display = 'none';
    }
    return(
        <div>
            <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile" />
        </div>
    )

}

export default ProfilePicture