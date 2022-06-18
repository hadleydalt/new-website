import '../App.css';

export const Constellations = (props) => {

    const rotatePos = props.rotatePos

    const style = {
        transform: `rotate(${rotatePos}deg)`
    }

    return (
        <>
            <img className="constellations" src={require('../graphics/ConstellationsNoAxis.png')} style={style} />
            <img className="axis" src={require('../graphics/Axis.png')} style={style}/>
        </> 
    )
}