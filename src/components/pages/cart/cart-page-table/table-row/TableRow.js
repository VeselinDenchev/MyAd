import Quantity from "../../../../product/quantity/Quantity";
import Image from "./image/Image";

export default function TableRow({image}) {
    return (
        <tr>
            <td>
                <Image image={image} />
            </td>
            <td>$99</td>
            <td>
                <Quantity />
            </td>
            <td>$99</td>
            <td><button><i className="fa fa-trash"></i></button></td>
        </tr>
    );
}