// production code

exports.repair = item => {
  item.durability = 100;
  return item;
}

exports.fail = item => {
  if (item.enhancement > 0 && item.enhancement <= 14) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }
  return item;

}
