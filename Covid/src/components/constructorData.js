import yPoints from "../models/data";  //positive correlation is good :)
import mediaReportings from "../models/data";

let nextId = 0;
let Points;

var newPoint =  {
            id:0, 
            x: Data_Maybe.Nothing.value, 
            y: Data_Maybe.Nothing.value
};

for(i=0; i<30; i++) {
    newPoint =  {
            id: nextId++, 
            x: mediaReportings[i], 
            y: yPoints[i]
    };
    Points.push(newPoint);
}

var initialState = {
    nextId: 0, 
    points: Points[], 
    yIntercept: Data_Maybe.Nothing.value, 
    slope: Data_Maybe.Nothing.value, 
    pressStatistic: Data_Maybe.Nothing.value, 
    running: false
};