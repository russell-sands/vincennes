// Utils for formatting issues related to the way data is stored in the NRI data

export const formatDecimal = (n, convertRatioToPct) => {
  // format decimals to 2 digits and handle ratios
  if (convertRatioToPct) n = n * 100;
  let result = n.toFixed(2);
  let prefix = '';
  if (result === 0 && n > 0) {
    prefix = '<';
    result = '0.01';
  }
  return prefix + result;
};

// Special case to make formating ratios easier
export const formatAsPercent = (n) => {
  return formatDecimal(n, true) + '%';
};

export const formatNumber = (n, decorator) => {
  // format a number with prefixing.
  let factor = 1;
  let suffixKey = '0';
  const wholePart = String(Math.trunc(n));
  const digits = wholePart.length;
  const suffixLookup = {
    0: '',
    1: 'k',
    2: 'M',
    3: 'B',
    4: 'T',
  };
  if (digits > 3 && digits <= 6) {
    factor = 1000;
    suffixKey = 1;
  } else if (digits > 6 && digits <= 9) {
    factor = 1000000;
    suffixKey = 2;
  } else if (digits > 9 && digits <= 12) {
    factor = 1000000000;
    suffixKey = 3;
  } else if (digits > 12) {
    factor = 1000000000000;
    suffixKey = 4;
  }
  let factored = (Number(wholePart) / factor).toFixed(1);
  // Handle when "round up" pushes us to another scale
  if (factored >= 1000) {
    // Max out at 4
    suffixKey = Math.min(4, suffixKey + 1);
    factored = (factored / 1000).toFixed(1);
  }
  // Get the output
  decorator = decorator ? decorator : '';
  let output;
  if (factored < 1) {
    output = `<${decorator}1`;
  } else {
    output = decorator + String(factored) + suffixLookup[suffixKey];
  }
  return output;
};
