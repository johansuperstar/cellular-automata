const getRandomBool = () => {
  return Math.random() > 0.5;
};

const getRandomArray = () => {
  var arr = [];
  for (var i = 0; i < 70; i++) {
    arr.push(getRandomBool());
  }
  return arr;
};

export default getRandomArray;
