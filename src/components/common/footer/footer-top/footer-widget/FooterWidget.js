export default function FooterWidget(props) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="footer-widget">
                <h2>{props.heading}</h2>
                {props.children}
            </div>
        </div>
    );
}