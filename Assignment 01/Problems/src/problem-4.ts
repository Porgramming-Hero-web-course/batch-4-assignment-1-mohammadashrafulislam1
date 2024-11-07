{
    // 

type Shape ={
    shape: string;
    radius?:number;
    height?:number;
    width?:number;
}
const calculateShapeArea = (shape: Shape) =>{
    // console.log(shape.getShapeArea())
    console.log(shape)
    if (shape.shape === "circle" && shape.radius !== undefined) { //it was showing error so I added undefined condition:
        return Math.PI * shape.radius * shape.radius;
    } else if (shape.shape === "rectangle" && shape.width !== undefined && shape.height !== undefined) {
        // Area of a rectangle: width * height
        return shape.width * shape.height;
    }
}


// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });


// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

console.log(circleArea, rectangleArea)
// OutPut: 78.53981633974483, 24

// 
}