import "./App.css";

import { RecipeIngredients } from "./components/Ingredients";
import RecipeDescription from "./components/Description";
import { RecipePhoto } from "./components/Photos";

function App() {
  return (
    <div className="App">
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div className="recipePhotoBlock">
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </div>
  );
}

export default App;
