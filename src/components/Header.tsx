import bsc from '../assets/images/bsc.png'
import logo_black from '../assets/images/logo_black.png'
import logo_white from '../assets/images/logo_white.png'

function Header() {
    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            {/*** ***** Logo Start ***** ***/}
                            <a href="/" className="logo">
                                <img src={logo_black} className="d-block d-md-none" style={{
                                    width: 130,
                                    maxWidth: 130
                                }} alt="Blockchain Open World" />
                                <img src={logo_white} className="d-none d-md-block" style={{
                                    width: 150,
                                    maxWidth: 150
                                }} alt="Blockchain Open World" />
                            </a>
                            {/*** ***** Logo End ***** ***/}
                            {/*** ***** Menu Start ***** ***/}
                            <ul className="nav">
                                <li><a href="/" className="active">Home</a></li>
                                <li><a href="https://discord.gg/ygMaAGD378"><i className="fa-brands fa-discord"></i> Discord</a></li>
                                <li><a href="https://github.com/blockchain-open-world"><i className="fa-brands fa-github"></i> Github</a></li>
                                {/*** <li><a href="/whitepaper">Whitepaper</a></li> ***/}
                                <li><a href="docs/audit.pdf">Audit</a></li>
                                <li><a href="https://bscscan.com/token/0xa1c8720f6c473a96dae5d6d19893c32a102271c1">BOW Token <img src={bsc} alt="BSC" /></a></li>
                                {/*** <li><a href="https://play.blockchainopenworld.com">Play</a></li> ***/}
                            </ul>
                            <a className='menu-trigger'>
                                <span>Menu</span>
                            </a>
                            {/*** ***** Menu End ***** ***/}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header