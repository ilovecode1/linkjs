#What is link.js?

It takes links link http://cosmicsearch.org and turns it to a link.

#Docs

```
linkjs.do(string)
linkjs.Version
linkjs.Author
```

# Demos

##Simple

```
var linkjsdemo = linkjs.do("this is some text a link is here http://cosmicsearch.org I want to email so email@cosmicsearch.org lets trick it up and add a period http://cosmicsearch.org.");
```

##The DOM

```
document.write(linkjs.do("this is some text a link is here http://cosmicsearch.org I want to email so email@cosmicsearch.org lets trick it up and add a period http://cosmicsearch.org."));
```

##Alert
```
var linkjsdemo = linkjs.do("this is some text a link is here http://cosmicsearch.org I want to email so email@cosmicsearch.org lets trick it up and add a period http://cosmicsearch.org.");
alert(linkjsdemo)
```
