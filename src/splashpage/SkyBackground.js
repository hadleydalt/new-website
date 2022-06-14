import '../App.css';
import { Constellations } from './Constellations';
import { TopBar } from './TopBar';

export const SkyBackground = () => {
    return (
        <>
            <div className="sky-background">
                <div className="constellations-wrapper">
                    <Constellations />
                    <div className="intro">
                        <img src={require('../graphics/TRANSPARENT SPLASH GRAPHIC.png')} />
                    </div>
                </div>
                <TopBar />
            </div>
        </>
    )
}