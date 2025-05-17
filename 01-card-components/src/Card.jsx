import profilePic from './assets/125584737.png'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Cu Đơ</h2>
            <p className='card-text'>Ở đây có bán cu đơ</p>
        </div>
    )
}
export default Card;