// import { ConcreteDataProviderOLD } from '../views/concrete_old';
import { ConcreteDataProvider } from '../views/concrete';

const cp = new ConcreteDataProvider();
const chartID = 1;

// export function getDataOLD(id) {
//   let cp = new ConcreteDataProviderOLD();
//   return cp.getData(id);
// }

/**
 * Returns our data for the charts we can specify which data by the parameter value.
 * Value of '1' -- returns first chart data,
 * Value of '2' -- returns second chart data,
 * Value of '3' -- returns third chart data,
 */
export function getData() {
    return cp.getVizData(chartID);
}

export function getHintData(hintID = 1) {
  return cp.getSingleHintData(hintID);
}

export function getAllHints() {
  return cp.getAllHintData();
}