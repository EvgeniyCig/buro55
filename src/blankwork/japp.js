import styles from './japp.module.scss';
import {Jblock00,Jblock01} from './b00-main';
function App() {
//  let y = useScrollData().position.y;

  return (
    <div className={styles.jmcmain}>
      <Jblock00 />
      <Jblock01 />
    </div>
  );
}
export default App;