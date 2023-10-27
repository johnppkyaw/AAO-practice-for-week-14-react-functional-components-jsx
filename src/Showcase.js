import "./Showcase.css";

function Showcase() {
  const favPokemon = "Snorlax";
  const pokeCharacteristics = {
    type: "Normal",
    move: "Body Slam"
  };
  const snorlaxImage = require("./images/143.png");
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        src={snorlaxImage}
        alt={favPokemon}
        style={{
          width: "300px",
          height: "300px",
          border: "1px black solid",
          borderRadius: "50%"
        }}
      ></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span className="span1">{pokeCharacteristics.type}</span> and one of
        their movies is{" "}
        <span className="span2">{pokeCharacteristics.move}</span>.
      </h2>
    </div>
  );
}

export default Showcase;
