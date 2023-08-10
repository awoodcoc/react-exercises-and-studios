export default function BookList() {
  let pageTitle = "My Book List";
  let book1 =
    "https://upload.wikimedia.org/wikipedia/commons/c/c3/Remarque_Im_Westen_nichts_Neues_1929.jpg";
  let book2 = "";
  let book3 = "";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Nothing here!" />
      <img src={book2} alt="Nothing here!" />
      <img src={book3} alt="Nothing here!" />
    </div>
  );
}
