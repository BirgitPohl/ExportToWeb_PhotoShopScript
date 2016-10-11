
# Export to Web

A script to export your pictures for the web sized 100% and 200%.
Open all images in Photoshop and run the script:
```
File / Scripts / ExportDocumentForWeb_FullAuto
```
It will create a folder "ExportforWeb" and place all images there.
You can close your original pictures without saving. This script will save a PNG in 100%.

##Set desired screen sizes:
Open the file and set your sizes in arrayOfSizes. Leave the first value as it is for it's original size.
```
var arrayOfSizes = [app.activeDocument.width.value, 1200, 992, 768, 360, 320];
````

### Windows Path:
```
Program / FilesAdobeAdobe / Photoshop CC 2015 / Presets / Scripts
```
### Mac Path:
```
Applications / Adobe Photoshop CC / Presets / Scripts
```

##Notes:

Based on Murdoch Carpenter's script.
http://murdochcarpenter.com/blog/
Tested in Photoshop CC (2015.5.1)
V2.0

##More information:
[Smashing Magazine Article of Mr Carpenter](https://www.smashingmagazine.com/2015/05/retina-design-in-photoshop/)