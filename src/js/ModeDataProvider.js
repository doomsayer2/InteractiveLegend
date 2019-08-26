import {ABSTRACT, CONCRETE} from "./constants";
import {ConcreteDataProvider} from "./views/concrete";
import {AbstractDataProvider} from "./views/abstract";

export function getModeData(id, view) {
    let cp = new ConcreteDataProvider();
    let ap = new AbstractDataProvider();
    
    if (view === ABSTRACT) return ap.getData(id);
    else if (view === CONCRETE) {
        return cp.getData(id);
    }
}