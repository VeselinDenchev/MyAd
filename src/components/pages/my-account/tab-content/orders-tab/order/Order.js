export default function Order({number}) {
    return (
        <tr>
            <td>{number}</td>
            <td>Product Name</td>
            <td>01 Jan 2020</td>
            <td>$99</td>
            <td>Approved</td>
            <td><button className="btn">View</button></td>
        </tr>
    );
}