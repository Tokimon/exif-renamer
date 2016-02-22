import fs from 'fs';
import { find } from './read';

export default function duplets( args ) {
  // Get all files with _xx.xxx in the end
  return find(n_path.join(args.path, `/**/*_*.(${args.ext.join('|')})`))
    .then((files) => {
      return Promise.all(files.map((file) => {
        const m = /_\d+(.[a-z0-9]+)$/i.exec(file);
        if(!m) { return null; }

        // Read current duplet file and the original, to compare their content
        return Promise.all([
          new Promise( (resolve, reject) => fs.readFile(file, (err, data) => resolve(err ? null : data)) ),
          new Promise( (resolve, reject) => fs.readFile(file.replace(m[0], m[1]), (err, data) => resolve(err ? null : data))),
        ])
        // if they match return the path for it to be handled (deleted)
        .then((datas) => {
          const [data1, data2] = datas;
          return !data1 || !data2 || data1 === data2 ? file : null;
        });
      }));
    })
    // Handle duplets
    .then((duplets) => {
      duplets.forEach((duplet) => { if(duplet) { fs.unlinkSync(duplet) }});
    });
}
