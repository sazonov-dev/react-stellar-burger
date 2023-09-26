import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  return (
    <div className={styles.app}>
        <AppHeader/>
        <main style={{display: 'flex', maxWidth: '1240px', margin: '0 auto', width: '100%', gap: '40px'}}>
            <BurgerIngredients/>
            <BurgerConstructor/>
        </main>
    </div>
  );
}

export default App;
