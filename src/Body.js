import './Body.scss';
import body0 from './assets/body0.gif';
import body1 from './assets/body1.gif';
import body2 from './assets/body2.gif';
import body3 from './assets/body3.png';
import body4 from './assets/body4.png';
import body5 from './assets/body5.png';

import styled, {keyframes} from 'styled-components'

const moveBackForth = (xPos) => keyframes`

    0% {
        left: ${xPos};
    }

    50% {
        left: ${`${(parseInt(xPos) + Math.abs(75 - parseInt(xPos)))}%`};
    }

    100% {
        left: ${xPos};
    }
`

const smolMoveUpDown = keyframes`

    0% {
        top: 0;
    }

    50% {
        top: 20px;
    }

    100% {
        top: 0px;
    }
`

const moveUpDown = keyframes`
    0% {
        top: 0;
    }

    50% {
        top: 100px;
    }

    100% {
        top: 0;
    }
`

const bopBackForth = keyframes`
    0% {
        transform: rotate(-20deg);
    }

    50% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(-20deg);
    }
`

const BodyContainer = styled.div`
    position: absolute;
        
    &.animation-0 {
        animation: ${({xPos}) => moveBackForth(xPos)} ${Math.random() < 0.5 ? "17" : "20"}s infinite, ${smolMoveUpDown} 5s infinite, ${bopBackForth} 10s infinite;
    }

    &.animation-1 {
        animation: ${moveUpDown} 7s infinite;
    }

    &.animation-2 {
        animation: ${bopBackForth} 4s infinite;
    }

    &.delay-0 {
        animation-delay: 100ms;
    }

    &.delay-1 {
        animation-delay: 500ms;
    }

    &.delay-2 {
        animation-delay: 1000ms;
    }

    &.delay-3 {
        animation-delay: 1500ms;
    }
`

const imgMap = [body0, body1, body2, body3, body4, body5];
const Body = ({user}) => {
    return (
        <>
        {user && 
            (
            <BodyContainer style={{"left": user.xPos}} xPos={user.xPos} className={`body animation-${user.animateId} delay-${user.delayId}`}>
                <div  className="body-image-container">
                    <p className="body-name">{user.username}</p>
                    <img className="body-head" src={user.image} alt="head"/>
                    <img className="body-image" src={imgMap[user.imgId]} alt="body"/>                
                </div>
            </BodyContainer>
        )}
        </>
    )
}

export default Body;