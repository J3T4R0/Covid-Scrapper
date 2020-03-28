import getData from "../components/app";

export const A = getData().slope;
export const B= getData().yIntercept;


//   {
//     arrayMinOrMax: arrayMinOrMax, 
//     arrayNumberHandler: arrayNumberHandler, 
//     containsNothing: containsNothing, 
//     first: first, 
//     firstOrSecondValues: firstOrSecondValues, 
//     isInfinity: isInfinity, 
//     lengthNum: lengthNum, 
//     maybeNumberToString: maybeNumberToString, 
//     numberInvalid: numberInvalid, 
//     second: second, 
//     stringToMaybeNumber: stringToMaybeNumber
// };

// },{"../Control.Semigroupoid":138,"../Data.Array":165,"../Data.Foldable":190,"../Data.Functor":209,"../Data.Generic":211,"../Data.HeytingAlgebra":213,"../Data.Int":220,"../Data.Maybe":231,"../Data.Semigroup":254,"../Global":272,"../Prelude":312}],318:[function(require,module,exports){
// require('Main').main();

// export function app.getLinearData() { // this function allows you to get data. Simply include the function in a file with a call to import App.js to load constructor data. Should be able to get data like slope and y-int, or a and b
//                 return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.get)(function (v1) {
//                     var linearRegressionData = dataForLinearRegressionFromState(v1);
//                     var result = LinearRegression.runLinearRegressionWithUnscaled(linearRegressionData.maxIterations)(linearRegressionData.maxCost)(linearRegressionData.learningRate)(linearRegressionData.coefficients)(linearRegressionData.regressands)(linearRegressionData.designMatrix);
//                     var pressStatistic = LinearRegression.calculatePressStatistic(linearRegressionData.regressands)(result)(linearRegressionData.designMatrix);
//                     return Control_Bind.bind(Control_Monad_Free.freeBind)(log$prime(Control_Monad_Aff_Free.affableFree(Halogen_Query_HalogenF.affableHalogenF(Control_Monad_Aff_Free.affableAff)))(Data_Generic.gShow(Data_Generic.genericArray(Data_Generic.genericNumber))(result)))(function () {
//                         return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (state) {
//                             var $119 = {};
//                             for (var $120 in state) {
//                                 if ({}.hasOwnProperty.call(state, $120)) {
//                                     $119[$120] = state[$120];
//                                 };
//                             };
//                             $119.yIntercept = Data_Array.head(result);
//                             $119.slope = Data_Array.last(result);
//                             $119.pressStatistic = pressStatistic;
//                             $119.running = false;
//                             return $119;
//                         }))