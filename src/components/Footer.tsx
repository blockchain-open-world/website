
import { Helmet } from "react-helmet";

function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                <span>Design: <a href="https://templatemo.com" target="_blank" title="free CSS templates">TemplateMo</a>  Distributed By <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <Helmet>
                <script type="text/javascript" src="assets/js/tabs.js"></script>
                <script type="text/javascript" src="assets/js/popup.js"></script>
                <script type="text/javascript" src="assets/js/custom.js"></script>
            </Helmet>
        </>
    )
}

export default Footer