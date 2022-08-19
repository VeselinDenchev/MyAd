export default function Description({description}) {
    return (
        <div id="description" className="container tab-pane active">
            <h4>Product description</h4>
            <p>
                {description}
            </p>
        </div>
    );
}