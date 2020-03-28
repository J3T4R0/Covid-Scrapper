import random, time
import getCases
import getExpectedCases
import getMediaReportings
import getPopulationDensity
import getPopulationSize
while True:
    data = [getCases(), getExpectedCases(), getMediaReportings(), getPopulationDensity(), getPopulationSize()] 
    print(data, flush=True, end='')