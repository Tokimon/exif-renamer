// ExifTool supported extensions
// (http://www.sno.phy.queensu.ca/~phil/exiftool)
const extensions = [
  '3fr', '3g2', '3gp', '3gp2', '3gpp', 'a', 'aa', 'aax', 'acfm', 'acr', 'afm', 'ai', 'aif',
  'aifc', 'aiff', 'ait', 'amfm', 'ape', 'arw', 'asf', 'avi', 'azw', 'azw3', 'bmp', 'bpg',
  'btf', 'chm', 'ciff', 'cos', 'cr2', 'crw', 'cs1', 'dc3', 'dcm', 'dcp', 'dcr', 'dfont',
  'dib', 'dic', 'dicm', 'divx', 'djv', 'djvu', 'dll', 'dng', 'doc', 'docm', 'docx', 'dot',
  'dotm', 'dotx', 'dpx', 'dr4', 'ds2', 'dss', 'dv', 'dvb', 'dylib', 'eip', 'eps', 'epsf',
  'epub', 'erf', 'exe', 'exif', 'exr', 'exv', 'f4a', 'f4b', 'f4p', 'f4v', 'fff', 'fla',
  'flac', 'flif', 'flv', 'fpf', 'fpx', 'gif', 'gz', 'gzip', 'hdp', 'hdr', 'htm', 'html',
  'ical', 'icc', 'icm', 'ics', 'idml', 'iiq', 'ind', 'indd', 'indt', 'inx', 'iso', 'itc',
  'j2c', 'j2k', 'jng', 'jp2', 'jpc', 'jpe', 'jpeg', 'jpf', 'jpg', 'jpm', 'jpx', 'jxr', 'k25',
  'kdc', 'key', 'kth', 'la', 'lfp', 'lfr', 'lnk', 'm2t', 'm2ts', 'm2v', 'm4a', 'm4b', 'm4p',
  'm4v', 'max', 'mef', 'mie', 'mif', 'miff', 'mka', 'mks', 'mkv', 'mng', 'mobi', 'modd', 'moi',
  'mos', 'mov', 'mp3', 'mp4', 'mpc', 'mpeg', 'mpg', 'mpo', 'mqv', 'mrw', 'mts', 'mxf', 'nef',
  'nmbtemplate', 'nrw', 'numbers', 'o', 'odb', 'odc', 'odf', 'odg', 'odi', 'odp', 'ods',
  'odt', 'ofr', 'ogg', 'ogv', 'opus', 'orf', 'otf', 'pac', 'pages', 'pbm', 'pcd', 'pct',
  'pdb', 'pdf', 'pef', 'pfa', 'pfb', 'pfm', 'pgf', 'pgm', 'pict', 'plist', 'pmp', 'png',
  'pot', 'potm', 'potx', 'ppm', 'pps', 'ppsm', 'ppsx', 'ppt', 'pptm', 'pptx', 'prc', 'ps',
  'psb', 'psd', 'psdt', 'psp', 'pspimage', 'qif', 'qt', 'qti', 'qtif', 'ra', 'raf', 'ram',
  'rar', 'raw', 'rif', 'riff', 'rm', 'rmvb', 'rpm', 'rsrc', 'rtf', 'rv', 'rw2', 'rwl', 'rwz',
  'seq', 'so', 'sr2', 'srf', 'srw', 'svg', 'swf', 'thm', 'thmx', 'tif', 'tiff', 'torrent',
  'ts', 'ttc', 'ttf', 'vcard', 'vcf', 'vob', 'vrd', 'vsd', 'wav', 'wdp', 'webm', 'webp',
  'wma', 'wmv', 'wv', 'x3f', 'xcf', 'xhtml', 'xls', 'xlsb', 'xlsm', 'xlsx', 'xlt', 'xltm',
  'xltx', 'xmp', 'zip'
];

module.exports = {
  extensions,
  glob(ext = extensions) {
    ext = ext.join('|');
    const exts = [ext.toLowerCase(), ext.toUpperCase()];
    return `@(${exts.join('|')})`;
  }
};
