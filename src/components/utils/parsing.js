import { formatNumber, formatAsPercent } from './formaters';

// Risk metric base names
// prettier-ignore
const basesToName = {
  avln: 'Avalanche',
  cfld: 'Costal Flood',
  cwav: 'Cold Wave',
  drgt: 'Drought',
  erqk: 'Earthquake',
  hail: 'Hail',
  hrcn: 'Hurricane',
  hwav: 'Heat Wave',
  istm: 'Ice Storm',
  lnds: 'Landslide',
  wntw: 'Winter Weather',
  ltng: 'Lightning',
  rfld: 'Riverine Flood',
  swnd: 'Strong Wind',
  trnd: 'Torndado',
  tsun: 'Tsunami',
  vlcn: 'Volcano',
  wfir: 'Wildfire',
};

const categoryLookup = {
  hlr: 'historic',
  exp: 'exposure',
  eal: 'expected',
  evn: 'frequency',
  afr: 'frequency',
};

const labelLookup = {
  a: 'Agriculture',
  p: 'Population',
  b: 'Buildings',
  pe: '... Population Equiv.',
  r: 'Rating',
  ts: 'Events',
  eq: 'Frequency',
  t: 'Total',
  s: 'Score',
};

const dollarMetrics = ['Buildings', 'Agriculture', '... Population Equiv.'];
const dollarCategories = ['exposure', 'expected'];

export const getFullName = (baseName) => {
  return basesToName[baseName];
};

export const getRiskData = (data) => {
  const bases = Object.keys(basesToName);

  // Create an object to hold the restructured data
  const restructured = {};

  // Populate the object with entries for each variable base name
  // and metatdata for agriculture based on the variable base name
  const makeCategoryObject = (header, format) => ({
    header,
    format,
    metrics: {},
  });
  bases.forEach((base) => {
    restructured[base] = {
      metrics: {
        exposure: makeCategoryObject('Exposure Information', formatNumber),
        historic: makeCategoryObject('Historic Loss Ratio', formatAsPercent),
        expected: makeCategoryObject('Expected Losses', formatNumber),
        frequency: makeCategoryObject('Frequency'),
      },
    };
  });

  // For each attribute in the feature, parse and populate the returned data
  Object.keys(data).forEach((k) => {
    const [base, metric] = k.split('_');
    // Filter out any variables that aren't associated with a risk metric
    if (!bases.includes(base)) return;
    const category = categoryLookup[metric.slice(0, 3)];
    const metricLabel = labelLookup[metric.slice(3)];
    const decorator =
      dollarMetrics.includes(metricLabel) && dollarCategories.includes(category)
        ? '$'
        : '';
    if (category) {
      restructured[base].metrics[category].metrics[metricLabel] = {
        name: metric,
        decorator,
        value: data[k],
      };
    } else {
      restructured[base].metrics[metric] = data[k];
    }
  });
  return restructured;
};
