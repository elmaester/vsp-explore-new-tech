import * as d3 from 'd3';
import people from '../../data/people';
import getHairCount from './getHairCount';
import getHeightCount from './getHeightCount';

const heightCount = getHeightCount(people);

const heightBarChartParams = {
  name: (d) => d.name,
  value: (d) => d.height,
  xLabel: 'Height in cm →',
  x: (d) => d.height,
  y: (d) => d.name,
  yDomain: d3.groupSort(
    heightCount,
    ([d]) => -d.height,
    (d) => d.name
  ),
  color: 'steelblue',
  marginLeft: 110,
};

const hairCount = getHairCount(people);

const hairDonutChartParams = {
  name: (d) => d.color,
  value: (d) => d.count,
  width: 500,
  height: 500,
};

const fdGraphParams = {
  nodeId: (d) => d.id,
  nodeGroup: (d) => d.group,
  nodeTitle: (d) => `${d.id}\n${d.group}`,
  linkStrokeWidth: (l) => Math.sqrt(l.value),
  height: 600,
};

export {
  heightCount,
  heightBarChartParams,
  hairCount,
  hairDonutChartParams,
  fdGraphParams,
};
