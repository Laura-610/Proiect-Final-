import urllib.request
webUrl  = urllib.request.urlopen('file:log-in%20page.html')

print ("result code: " + str(webUrl.getcode()))

data = webUrl.read()
print (data)
