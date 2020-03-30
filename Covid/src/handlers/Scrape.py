import requests
from bs4 import BeautifulSoup
page=requests.get('https://www.worldometers.info/coronavirus/country/us/')
soup = BeautifulSoup(page.content,'html.parser')
page2=requests.get('https://web.archive.org/web/20190306144030/https://www.citypopulation.de/php/usa-states-admin.php')
soup2= BeautifulSoup(page2.content, 'html.parser')
class corona:

 def check(self):
 
   #this makes a list with country names
   tableRef=soup.find( id="usa_table_countries_today")
   countryVals=tableRef.findAll(style="font-weight: bold; font-size:15px; text-align:left;")
   check3='<td style="font-weight: bold; font-size:15px; text-align:left;">\n'
   count=0
   dict1={}
   check4=' </td>'
   for val in countryVals:
     b=str(val).replace(check4,'')
     a=str(b).replace(check3,'')
     dict1[a]=''

   dict2=dict1

   #list with numbers
   vals=tableRef.findAll(style="font-weight: bold; text-align:right")
   check1='<td style="font-weight: bold; text-align:right">'
   check2=' </td>'
   counter=0
   list1=[]
   for val in vals:
       z= str(val).replace(check1,'')
       q= str(z).replace(check2,'')
       list1.append(q)
  

   # adds vals
   x=0
   for key in dict2:
     dict2[key]=list1[x]
     x=x+1
   


  #scrape names
   popRef=soup2.find(id="tl")
   popName=popRef.findAll(itemprop="name")
   checker3='<span itemprop="name">'
   checker4='</span>'
   count1=0
   nameDict={}
   for val in popName:
     g=str(val).replace(checker3,'')
     h=str(g).replace(checker4,'')
     nameDict[h]=''
   del nameDict['District of Columbia']
   del nameDict['USA']
   nameDict2=nameDict
   print(nameDict) 

   #scrape population
   popVal=popRef.findAll(class_="rpop prio5")
   popVal.pop(0)
   checker1='<td class="rpop prio5">'
   checker2='</td>'
   listPop=[]
   for val in popVal:
       d=str(val).replace(checker2,'')
       e=str(d).replace(checker1,'')
       listPop.append(e)
   print(listPop)   


   #add vals
   y=0
   for key in nameDict2:
     if y!=52:
        nameDict2[key]=listPop[y]
        y=y+1
     


   #For loops to remove comma
   tempDict={}
   for key,val in dict2.items():
      val= val.replace(',','')
      tempDict[key]=val
    
   dict2=tempDict
   


   tempDict1={}
   for key,val in nameDict2.items():
      val= val.replace(',','')
      tempDict1[key]=val

   nameDict2=tempDict1
   print(nameDict2)
   print(dict2) 

   #Makes Dictionary with percentages
   #dict2 is for the cases, nameDict2 is for populations
   heatDict={}
   for key in dict2:
      for key1 in nameDict2:
        if key==key1:
          heatDict[key]=10000*(int(dict2[key])/int(nameDict2[key1]))
          heatDict[key]=round(int(heatDict[key]))
   print(heatDict)
   return(heatDict)
u=corona()
u.check()

