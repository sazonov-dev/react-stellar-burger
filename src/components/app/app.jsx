import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";


function App() {
  return (
    <div className={styles.app}>
        <AppHeader/>
        <main className={styles.main}>
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
        </main>
    </div>
  );
}

export default App;
