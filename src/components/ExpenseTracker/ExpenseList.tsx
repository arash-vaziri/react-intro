import React from "react";

interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expences: Expenses[];
  onRemove: (id: number) => void;
}

export const ExpenseList = ({ expences, onRemove }: Props) => {
  if (expences.length == 0) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expences.map((item) => {
            return (
              <tr key={`row_${item.id}`}>
                <td> {item.description} </td>
                <td> {item.amount} $</td>
                <td> {item.category}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      onRemove(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total :</td>
            <td>{expences.reduce((accl, item) => accl + item.amount, 0)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
