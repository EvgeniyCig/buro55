import jst from './japp.module.scss';
import {Jblock01, Jbl} from './b00-main';

function App() {
    return (
        <div className={jst.jmcmain}>
            <Jblock01 />
            <Jbl />
            <Jblock01 />
            <Jblock01 />
        </div>
    );
}
export default App;