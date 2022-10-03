import { makeAutoObservable } from "mobx";

class jtest {
    jvar=0;
    constructor() {
        makeAutoObservable(this);
        this.jvar=1;
    }
}
export default new jtest()