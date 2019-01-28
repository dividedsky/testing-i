// production code

exports.repair = item => {
  item.durability = 100;
  return item;
};

exports.fail = item => {
  if (item.enhancement > 0 && item.enhancement <= 14) {
    item.durability -= 5;
  } else {
    item.durability -= 10;
  }
  if (item.enhancement > 16) {
    item.enhancement--;
  }
  setPrefix(item);
  return item;
};

exports.success = item => {
  if (item.enhancement < 20) item.enhancement++;
  return item;
}

const setPrefix = item => {
    switch (item.enhancement) {
      case 16:
        item.prefix = '[PRI] ';
        break;
      case 17:
        item.prefix = '[DUO] ';
        break;
      case 18:
        item.prefix = '[TRI] ';
        break;
      case 19:
        item.prefix = '[TET] ';
        break;
      case 20:
        item.prefix = '[PEN] ';
        break;
      case 0:
        item.prefix = '';
        break;
      default:
        item.prefix = `[+${item.enhancement}]`;
  }
  item.name = item.prefix + item.baseName;
};

const testItem = {
  baseName: 'sword of swordiness',
  enhancement: 0,
  durability: 70
};
setPrefix(testItem);

