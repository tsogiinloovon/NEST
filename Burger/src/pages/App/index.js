import styles from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";
import SideBar from "../../components/SideBar";

function App() {
  return (
    <div>
      <Toolbar />
      <SideBar/>
      <main className={styles.Content}>
        <BurgerPage />
      </main>
    </div>
  );
}

export default App;
