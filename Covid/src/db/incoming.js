import A from "./getAB";
import B from "./getAB";

function reportReading() {
    const AB = [A, B] 
    process.stdout.write(AB + '\n'); // Write with newline char
}
reportReading();