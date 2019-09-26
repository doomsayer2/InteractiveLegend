import * as d3 from 'd3';
import { moveElementsToNewParent } from './util';

const d3Showcase = () => {
  setTimeout(() => {
    const paths = d3.select('.vegaViz1 > svg').selectAll('path');
    const oneBar = d3.select(paths.nodes()[5]);
    const oneBarBox = oneBar.node().getBBox();

    console.log('Bar properties: ', oneBar.node().getBoundingClientRect());
    console.log(oneBar.node().getBBox());

    oneBar
      .append('cricle')
      .attr('r', 30)
      .attr('cy', 65);

    const hint1Group = d3
      .select('.vegaViz1 > svg')
      .select('.mark-rect')
      .append('g')
      .on('click', function(d) {
          alert('Hello');
      });

    hint1Group
      .append('circle')
      .attr('r', 10)
      .attr('cx', oneBarBox.x + 10)
      .attr('cy', oneBarBox.y - 12)
      .style('stroke', '#C51B7D')
      .style('fill', '#C51B7D');
    hint1Group
      .append('text')
      .attr('x', oneBarBox.x + 10)
      .attr('y', oneBarBox.y - 6)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .text('1');

    console.log('Element: ', d3.select(paths.nodes()[3]));
  }, 1);

  return 1;
};

const makeLegendBoxes = () => {
    d3.select('.stepsContainer')
    .append('fieldset')
    .attr('id', 'reading')
    .append('legend')
    .text('Reading');
  d3.select('.stepsContainer')
    .append('fieldset')
    .attr('id', 'using')
    .append('legend')
    .text('Using');

  moveElementsToNewParent(['step-0', 'step-1', 'step-2'], 'reading');
  moveElementsToNewParent(['step-3', 'step-4', 'step-5'], 'using');
};

export { d3Showcase, makeLegendBoxes };
