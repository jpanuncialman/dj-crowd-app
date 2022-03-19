import './Body.scss';
import body0 from './assets/body0.gif';
import body1 from './assets/body1.gif';
import body2 from './assets/body2.gif';
import body3 from './assets/body3.png';
import body4 from './assets/body4.png';
import body5 from './assets/body5.png';

const imgMap = [body0, body1, body2, body3, body4, body5];
const Body = ({user}) => {
    return (
        <>
        {user && 
            (
            <div style={{"left": user.xPos}} className={`body animation-${user.animateId} delay-${user.delayId}`}>
                <div  className="body-image-container">
                    <p className="body-name">{user.username}</p>
                    <img className="body-head" src={user.image} alt="head"/>
                    <img className="body-image" src={imgMap[user.imgId]} alt="body"/>                
                </div>
            </div>
        )}
        </>
    )
}

export default Body;