export default function Payments() {
  return (
    <>
      <div className="container-fluid gap-5">
        <h3>Payment Logs</h3>
        <button
          type="button"
          className="btn mt-2"
          style={{ backgroundColor: "#009e84", color: "#ffff" }}
        >
          Generate Payment Link
        </button>
        <table className="table table-striped mt-2">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Payment From</th>
              <th scope="col">Payment To</th>
              <th scope="col">Amount</th>
              <th scope="col">Currency</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>25</td>
              <td>USD</td>
              <td>Paid</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>35</td>
              <td>USD</td>
              <td>Not Paid</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Muhammad Haris</td>
              <td>Ashfaq Khan</td>
              <td>25000</td>
              <td>PKR</td>
              <td>Paid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
