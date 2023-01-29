

// let brands = ["samsung", "apple", { name: "lg", founder: "xyz" }]

// let <arry_variable> = [0th index , 1st index, 2nd index  ]
let brands = ["samsung", "apple", "lg"]
console.log(brands);
console.log(brands[0]);
console.log(brands[1]);
console.log(brands[4]);

// brands = [1, 2, 3]
brands[1] = "changed." // re-initialized
brands[2] = "lg-changed."
brands[3] = "sony"
console.log(brands);



let color = "black";
console.log("prev", color);
color = "white";
console.log("after,", color);



let projector = {
    // <key> or  <attribute> or <property>: value,
    brand: "sony",
    color: "black",
    color: "next color value"
}

console.log("the color is ", projector.color);
console.log("the brand is ", projector.brand);
projector.brand = "changed- brand-value"
projector.dimension = "2*3*4"

console.log("the chanded-brand is ", projector.brand);
console.log(projector.dimension);








