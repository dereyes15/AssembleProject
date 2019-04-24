import React from 'react';
import { Table } from 'reactstrap';

class Example extends React.Component {
  render()  {
    let { cart } = this.props;

    let items = cart.map((item) =>  {
      return(
        <tr>
          <td>
            <img src={item.imgLink} />
          </td>
          <td>
            { item.name }
            <br/>
            SKU # { item.sku }
          </td>
          <td>
            { item.quantity }
          </td>
          <td>
            ${ item.unitPrice }
          </td>
        </tr>
      )
    });

    return  (
      <div>
      <Table borderless>
        <thead>
        </thead>
        <tbody>
          { items }
        </tbody>
      </Table>

      </div>
    )
  }
}

export default Example;
