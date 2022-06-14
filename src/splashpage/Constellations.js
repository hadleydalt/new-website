import '../App.css';

export const Constellations = () => {
    return (
        <>
            <img className="constellations" src={require('../graphics/ConstellationsNoAxis.png')} />
            <img className="axis" src={require('../graphics/Axis.png')} />
        </> 
    )
}