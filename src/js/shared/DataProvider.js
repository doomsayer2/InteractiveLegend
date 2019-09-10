import { ConcreteDataProviderOLD } from '../views/concrete_old';
import { ConcreteDataProvider } from '../views/concrete';

const cp = new ConcreteDataProvider();

export function getDataOLD(id) {
  let cp = new ConcreteDataProviderOLD();
  return cp.getData(id);
}

export function getData() {
    return cp.getVizData();
}

export function getHintData() {
  return cp.getHintData();
}