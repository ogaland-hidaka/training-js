const appleObj = {
    id: 1,
    name: "apple",
    info: {
        from: "鹿児島",
    },
};

// ディープコピー
const appleCopyObj = JSON.parse(JSON.stringify(appleObj));


console.log("-------- 書き換え前 -------------");
console.log("appleObj: ", appleObj);
console.log("appleCopyObj: ", appleCopyObj);

appleObj.info.from = "宮崎";

console.log("\n-------- 書き換え後 -------------");
console.log("appleObj: ", appleObj);
console.log("appleCopyObj: ", appleCopyObj);