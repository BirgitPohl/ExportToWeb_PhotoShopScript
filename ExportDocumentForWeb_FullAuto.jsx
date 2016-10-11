// Birgit Pohl
// www.birgitpohl.com
// Repository: 
// Based on Murdoch Carpenter's script
// http://murdochcarpenter.com/blog/
// Tested in Photoshop CC (2015.5.1)
// V2.0

var doc = app.activeDocument;
var docName = doc.name.replace(/\.[^\.]+$/, '');
var docPath = doc.path;
var scalex1 = "100%";
var scalex2 = "200%";
var folderName = "ExportForWeb";
var extensionNamex1 = ".png";
var extensionNamex2 = "-@2x.png";

//Your screen pixel width of choice, keep the first value for the original size saved in PNG
var arrayOfSizes = [app.activeDocument.width.value, 1200, 992, 768, 360, 320];



function exportScaledPNG(scaleX, scaleY, size, extensionName) {
    // resize the document
    doc.resizeImage(scaleX, scaleY, doc.resolution, ResampleMethod.BICUBIC);
    // check if a folder has already been created or not - create if not
    var retinaFolder = Folder(docPath + "/" + folderName);
    if(!retinaFolder.exists) retinaFolder.create();
    // check if the PNG already exists or not - delete if so
    pngFile = File(docPath + "/" + folderName + "/" + docName + "-" + size + extensionName); 
    if(pngFile.exists) pngFile.remove();
    // save the PNG
    pngSaveOptions = new PNGSaveOptions();
    pngSaveOptions.compression = 9;
    doc.saveAs(pngFile, pngSaveOptions, true, Extension.LOWERCASE)
    // undo the history and purge
    doc.activeHistoryState = doc.historyStates[doc.historyStates.length-1];  //set to -1, to properly rsize it in the outer loop
    app.purge(PurgeTarget.HISTORYCACHES);
    // save the document (to avoid having to do it manually)
    // Don't need to save it, it will override the size of the original file.
    // doc.save();
}

// where the magic is casted, wrap in a try/catch for errors
for(var a = 0 ;a < app.documents.length; a++) {
    app.activeDocument = app.documents[a];
    doc = app.activeDocument;
    docName = doc.name.replace(/\.[^\.]+$/, '');
    for (var b = 0; b < arrayOfSizes.length-1; b++) {
        doc.resizeImage(UnitValue(arrayOfSizes[b],"px"),null, null, ResampleMethod.BICUBIC);
         try {
            exportScaledPNG(scalex1, scalex1, arrayOfSizes[b], extensionNamex1);
            exportScaledPNG(scalex2, scalex2, arrayOfSizes[b], extensionNamex2);
        } catch (e) {
            if (DialogModes.NO != app.playbackDisplayDialogs) {
                alert(e + " : " + e.line);
            }
        }
    }
    
}

