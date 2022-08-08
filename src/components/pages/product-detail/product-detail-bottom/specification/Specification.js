export default function Specification() {
    const specifications = 
    [
        'Lorem ipsum dolor sit amet 1',
        'Lorem ipsum dolor sit amet 2',
        'Lorem ipsum dolor sit amet 3',
        'Lorem ipsum dolor sit amet 4',
        'Lorem ipsum dolor sit amet 5',
    ];

    return (
        <div id="specification" className="container tab-pane fade">
            <h4>Product specification</h4>
            <ul>
                {specifications.map(specification =>
                    <li key={specification}>{specification}</li>
                )}
            </ul>
        </div>
    );
}