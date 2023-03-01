import "./PoolHallsList.css";
const PoolHallsList = (props) => {
  return (
    <ul>
      <table className="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Number of Tables</th>
          </tr>
        </thead>
        <tbody>
          {props.poolhalls.map((poolhall) => (
            <tr>
              <td>{poolhall.name}</td>
              <td>{poolhall.address}</td>
              <td>{poolhall.numberOfTables}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ul>
  );
};

export default PoolHallsList;
