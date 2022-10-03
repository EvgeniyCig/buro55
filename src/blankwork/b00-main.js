import {useWindowScroll} from 'react-use'; //https://github.com/streamich/react-use#
import jstyles from './b00-main.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';


// var RSwscroll = () => {
//     const {y} = useWindowScroll();
//     RSwscroll=y;
// }

export function Jblock00() {
    const {y} = useWindowScroll();

    return(
        <section className={jstyles.block00}>
            <div className={jstyles.jfixed}>
            {y}
            </div>
            <div>
                <p>Icons</p>
                <p><FontAwesomeIcon icon={faTimesCircle} /></p>
                <p><FontAwesomeIcon icon={faMobileAlt} /></p>
            </div>
        </section>
    )
}

export function Jblock01() {
    console.log('asdf');    
    return(
        <section className={jstyles.block01}><div>hello</div></section>
    )
}