import '../App.css';

export const Constellations = (props) => {

    const rotatePos = props.rotatePos
    const opacity = props.opacity

    const style = {
        transform: `rotate(${rotatePos}deg)`,
        opacity: opacity
    }

    return (
        <>
            <img className="constellations" src={require('../graphics/ConstellationsNoAxis.png')} style={style} />
            <img className="axis" src={require('../graphics/Axis.png')} style={style}/>
        </> 
    )
}