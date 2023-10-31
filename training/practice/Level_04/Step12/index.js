const fruit = {
    id: 1,
    name: "apple",
};
const copyFruit = fruit;
fruit.name = "banana";
console.log(copyFruit);

// シャローコピーで同じ参照を共有しているので、fruitで書き換えた内容が、copyFruitの方にも反映されている