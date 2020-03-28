const { spawn } = require('child_process');
const points = []; // Store readings

const sensor = spawn('python', ['../sensor.py']);
sensor.stdout.on('data', function(data) {
    
    // Coerce Buffer object to Float
    points.push(parseFloat(data));

    // Log to debug
    console.log(points);

    export const cases = points[0][];
    export const expectedCases = points[1][];
    export const mediaReportings = points[2][];
    export const populationDensity = points[3][];
    export const populationSize = points[4][];

    export const yPoints = expectedCases[][] - cases[][]; //positive correlation is good :)

});