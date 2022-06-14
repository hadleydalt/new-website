import '../App.css';
import { TopBarLink } from './TopBarLink';

export const TopBar = () => {
    return (
        <div className="topbar">
            <TopBarLink text="link one" dec={false}/>
            <TopBarLink text="link two" dec={false}/>
            <TopBarLink text="link three" dec={false}/>
            <TopBarLink text="link four" dec={false}/>
            <TopBarLink text="link five" dec/>
        </div>
    )
}