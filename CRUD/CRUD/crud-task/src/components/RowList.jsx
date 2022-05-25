import Row from "./Row";

const RowList = (props) => {
  return (
    <>
      {props.Data && props.Data.map((hero, i) =>
      <Row 
      key={i}
      name={hero.name}
      age={hero.age}
      secretIdentity={hero.secretIdentity}
      power={hero.power}
      delete={props.delete}
      index={i}
      edit={props.edit}
      />
      )}
    </>
  );
};

export default RowList;
