export default function Specification({specifications}) {
    // const specifications = 
    // [
    //     'Lorem ipsum dolor sit amet 1',
    //     'Lorem ipsum dolor sit amet 2',
    //     'Lorem ipsum dolor sit amet 3',
    //     'Lorem ipsum dolor sit amet 4',
    //     'Lorem ipsum dolor sit amet 5',
    // ];

    return (
        <div id="specification" className="container tab-pane fade">
            <h4>Product specifications</h4>
            <ul>
                <li>Processor: {specifications.processor}</li>
                <li>RAM: {specifications.ram}</li>
                <li>GPU: {specifications.gpu}</li>
                <li>Storage: {specifications.storage}</li>
                <li>Dipslay: {specifications.display}</li>
            </ul>
        </div>
    );
}