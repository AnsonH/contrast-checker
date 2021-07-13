import { useContext } from "react";
import ColorContext from "../../context/ColorContext";
import Rating from "../atoms/Rating";
import Tooltip from "../atoms/Tooltip";
import { getWcagRatings } from "../../utils/colorUtils";

export default function WcagResults() {
  const { contrast } = useContext(ColorContext);

  const [aaNormal, aaLarge, aaaNormal, aaaLarge] = getWcagRatings(contrast);

  // Table is styled in GlobalStyles.js for faster performance
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Normal Text</th>
          <th>
            <Tooltip content={<p>Text of ≥18pt or ≥14pt if bold</p>} placement="bottom" trigger="mouseenter focusin">
              <p tabIndex="0">Large Text</p>
            </Tooltip>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AA</td>
          <td>
            <Rating pass={aaNormal} />
          </td>
          <td>
            <Rating pass={aaLarge} />
          </td>
        </tr>
        <tr>
          <td>AAA</td>
          <td>
            <Rating pass={aaaNormal} />
          </td>
          <td>
            <Rating pass={aaaLarge} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
