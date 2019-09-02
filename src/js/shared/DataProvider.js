import {ConcreteDataProvider} from "../views/concrete";

export function getData(id) {
    let cp = new ConcreteDataProvider();
    return cp.getData(id);
}
