# import numpy as np
import numpy as np
from scipy.optimize.minpack import fsolve
from cmath import cos, exp
from scipy.integrate.quadpack import quad
# import scipy.integrate as Integrate
from  listener import AB 

x = AB[0]
b = AB[1]

def integrand2(x, b):
    return exp(-x)/b 

def intergralFunc2(b):
    integral, err = quad(integrand2, 0, 10, args=(x))  # **error here** 
    return 0.01 - integral

import matplotlib.pyplot as plt

def findGuess():
    vfunc = np.vectorize(intergralFunc2)
    f = np.linspace(-20, 20,10)
    plt.plot(f, vfunc(f))
    plt.xlabel('guess value')
    plt.show()

def solveFunction():
    y= fsolve(intergralFunc2, 10)
    return y

if __name__ == '__main__':
	findGuess()
	solution = solveFunction()
	print("solution is ", solution)

# np.save('/tmp/mediaReportings', np.array([1, 2, 3, 4, 5, 6]))
# X = np.load('/tmp/mediaReportings.npy', mmap_mode='r')
# X[]

# np.save('/tmp/caseDifference', np.array([1, 2, 3, 4, 5, 6]))
# Y = np.load('/tmp/caseDifference.npy', mmap_mode='r')
# Y[]

# linearData = getLinearData()

#  a = linearData.slope
#  b = linearData.yIntercept
#  equation = ax + b
#  lowerLimit = 0
#  upperLimit = 30
# # scipy.integrate.quadrature
# [ approximation , err] = Integrate.quadrature(equatio, lowerLimit, upperLimit)


# export function getLinearData() { // this function allows you to get data. Simply include the function in a file with a call to import App.js to load constructor data. Should be able to get data like slope and y-int, or a and b
#                 return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.get)(function (v1) {
#                     var linearRegressionData = dataForLinearRegressionFromState(v1);
#                     var result = LinearRegression.runLinearRegressionWithUnscaled(linearRegressionData.maxIterations)(linearRegressionData.maxCost)(linearRegressionData.learningRate)(linearRegressionData.coefficients)(linearRegressionData.regressands)(linearRegressionData.designMatrix);
#                     var pressStatistic = LinearRegression.calculatePressStatistic(linearRegressionData.regressands)(result)(linearRegressionData.designMatrix);
#                     return Control_Bind.bind(Control_Monad_Free.freeBind)(log$prime(Control_Monad_Aff_Free.affableFree(Halogen_Query_HalogenF.affableHalogenF(Control_Monad_Aff_Free.affableAff)))(Data_Generic.gShow(Data_Generic.genericArray(Data_Generic.genericNumber))(result)))(function () {
#                         return Control_Bind.bind(Control_Monad_Free.freeBind)(Halogen_Query.modify(function (state) {
#                             var $119 = {};
#                             for (var $120 in state) {
#                                 if ({}.hasOwnProperty.call(state, $120)) {
#                                     $119[$120] = state[$120];
#                                 };
#                             };
#                             $119.yIntercept = Data_Array.head(result);
#                             $119.slope = Data_Array.last(result);
#                             $119.pressStatistic = pressStatistic;
#                             $119.running = false;
#                             return $119;
#                         }))