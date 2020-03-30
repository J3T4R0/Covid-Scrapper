class list1:

  def  solve(self):
  #2/13 to 3/16 because there are no non 0 vals and is more problematic
   num=[4,3,7,5,13,14,7,12,21,20,23,48,40,74,71,102,97,173,188,216,247,274,365,385,548,782,767,993,1341,1641,1634,1905,1880]

   count=0
   add=0
   while count!=len(num)-1:
     add=add+(num[count+1]/num[count])
     count=count+1
   add=add/len(num)    
   print (add)
   return add

#obtains the average exponential rate of change




c=list1()
c.solve()
