const Animal = (props) => {
  function generateColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <img
          src={props.url}
          alt={`${props.gyvunas}-animal`}
          style={{ width: "25%", height: "25%" }}
        />
        <figcaption
          style={{
            background: generateColor(),
            textAlign: "center",
            width: "25%",
          }}
        >
          {props.gyvunas}
        </figcaption>
        <br />
      </div>
    </>
  );
};

export default Animal;
