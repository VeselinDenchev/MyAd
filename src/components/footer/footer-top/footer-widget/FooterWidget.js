export default function FooterWidget(props) {
    return (
        <div class="col-lg-3 col-md-6">
            <div class="footer-widget">
                <h2>{props.heading}</h2>
                {props.children}
            </div>
        </div>
    );
}