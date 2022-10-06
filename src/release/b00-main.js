import jstyles from './b00-main.module.scss';
import jtest from './mbx/mbstest';


export function Jblock01() {
//    console.log('asdf');
    return(
        <section className={jstyles.block01}><div>hello {jtest.jvar}</div></section>
    )
}

export const Jbl = () => {
    return(
        <section style={{ minHeight: "80vh", backgroundColor: "green" }} className={jstyles.block02}><div>hi {jtest.jvar}</div></section>
    )
}