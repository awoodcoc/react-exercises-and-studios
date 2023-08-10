import "./styles.css";
import Button from "./Button";
import oceans from "./oceans.json";

function Profile() {
  const listItem = oceans.map((ocean) => (
    <div
      key={ocean.id}
      className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}
    >
      <h1>{ocean.name}</h1>
      <h2> Animal Facts</h2>
      <li>{ocean.fact1}</li>
      <li>{ocean.fact2}</li>
      <li>{ocean.fact3}</li>
      <Button />
      <img src={ocean.image} alt={ocean.name} className="img" />
    </div>
  ));
  return (
    <>
      {/* <h3>Coming Soon! Profiles of Ocean creatures</h3> */}
      <ul>{listItem}</ul>
      <Button />
    </>
  );
}

export default Profile;
