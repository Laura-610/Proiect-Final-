import urllib.request
webUrl  = urllib.request.urlopen('file:///C:/Users/AtomB/OneDrive/Desktop/log-in%20page.html')

print ("result code: " + str(webUrl.getcode()))

data = webUrl.read()
print (data)