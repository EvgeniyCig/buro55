import jstyles from './b00-main.module.scss';
import jtest from './mbx/mbstest';


export function Jblock01() {
//    console.log('asdf');
    return(
        <section className={jstyles.block01}><div>hello {jtest.jvar}</div></section>
    )
}