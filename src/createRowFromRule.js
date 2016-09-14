import rules from './rules';

const createRowFromRule = (latestRow, ruleNumber) => {
  const rule = rules[ruleNumber];
  return latestRow.map((cell, index, arr) => {
    const beforeIndex = index === 0 ? arr.length - 1 : index - 1;
    const afterIndex = index === arr.length - 1 ? 0 : index + 1;
    const matchesCondition = x =>
      arr[beforeIndex] === x[0] &&
      arr[index] === x[1] &&
      arr[afterIndex] === x[2];
    return rule.filter(matchesCondition).length > 0;
  });
};

export default createRowFromRule;
