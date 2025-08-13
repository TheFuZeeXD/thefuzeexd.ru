import "./header.css"
import Logo from "/test_image/favicon.png"
import elaina from "/image/chibi_pixel_elaina.gif"

export default function Header() {
    return (
        <header>
            <div className="LogoType" onClick={() => { location.reload() }}>
                <img src={Logo}></img>
                <h1>TheFuZee<span>XD</span></h1>
            </div>
            <div className="toolbar">
                <img src={elaina} />
            </div>
        </header >
    )
}