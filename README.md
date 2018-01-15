#What is link.js?
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Filovecode1%2Flinkjs.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Filovecode1%2Flinkjs?ref=badge_shield)


It takes links link http://cosmicsearch.org and turns it to a link.

#New Site

http://getlink.js.org/

<a href="https://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="https://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
<!-- alternatives [bright|dark]_[horz|vert|tiny].png (width[horz:102,vert:50,tiny:77]) -->

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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Filovecode1%2Flinkjs.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Filovecode1%2Flinkjs?ref=badge_large)