const Row = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.secretIdentity}</td>
      <td>{props.power}</td>
      <td>
        <button className="btn btn-light" onClick={()=>props.edit(props.name, props.age, props.secretIdentity, props.power, props.index)}>Edit</button>
      </td>
      <td>
        <button className="btn btn-light" onClick={()=> props.delete(props.index)}>Delete</button>
      </td>
    </tr>
  );
};

export default Row;
