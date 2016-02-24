#Photo renamer

A tool to rename images from the actual date stored in the photo.

Sometimes the name of the photo does not contain the date and in order to sort the photos correctly, this needs to be
extracted and the photo renamed accordingly.

##How to use
Under normal circumstances the code below should be enough. 

```
$ node rename.js <full path to folder containing the images>
```

But if you need other settings than the default it can take following properties.

* -path (or -p): Full path to the folder containing the images (default property, so the annotation is not needed)
* -name (or -n): A date format string on how to name the files (default: 'yyyy-MM-DD-hh-mm-ss')
* -exp: Regular expression to detect file names already renamed
* -ext: List of extensions for file to search