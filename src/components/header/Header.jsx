import "./header.css"
import Logo from "/image/logo.jpg"

export default function Header() {
    return (
        <header>
            <div className="LogoType" onClick={() => { location.reload() }}>
                <img src={Logo}></img>
                <h1>TheFuZee<span>XD</span></h1>
            </div>
        </header >
    )
}
