export const general = ['date-time', 'tags', 'description'];

export const image = {
  basic: [...general, 'size', 'location', 'thumbnail'],
};

export const doc = {
  basic: ['name', ...general],
};

// const firstTable = document.querySelector('table.frame table.inner');
// const trs = firstTable.querySelectorAll('& > tbody > tr:not(.h)');

// const exifTags = {};
// trs.forEach((tr) => {
//   const tds = tr.children;
//   const tagId = tds[0];
//   const tagName = tds[1];
//   const type = tds[2];
//   const group = tds[3];
//   const values = tds[4];

//   const id = tagId.innerText;
//   const names = tagName.innerText.split('\n');
//   const types = type.innerText.split('\n');
//   const value = parseValues(values.innerText.split('\n'));
//   const groups = group.innerText.split('\n');

//   names.forEach((name, i) => {
//     const type = types[i];

//     exifTags[name] = {
//       id,
//       name,
//       type: getType(type),
//       value,
//       group: groups[i],
//     };
//   });
// });

// console.log(exifTags);

// function getType(type) {
//   const required = type.includes(':');
//   const writable = !type.includes('!') && !type.includes('*');

//   if (type === 'no' || type === 'undef') return { type, required, writable: false };

//   if (type.startsWith('string')) return { type: 'string', required, writable };

//   const intMatch = type.match(/^(?:int|rational)(\d+)(s|u)\[(\d+(?:\.\d+)?)\]/);
//   if (intMatch) {
//     return {
//       type: 'number',
//       bit: Number(intMatch[1]),
//       signed: intMatch[2] === 's',
//       length: parseInt(intMatch[3]) || null,
//       required,
//       writable,
//     };
//   }

//   const doubleMatch = type.match(/^double\[(\d+(?:\.\d+)?)\]([:!*]+)?/);
//   if (doubleMatch) {
//     return {
//       type: 'double',
//       length: parseInt(doubleMatch[1]) || null,
//       required,
//       writable,
//     };
//   }
// }

// function parseValues(input) {
//   const comments = [];
//   const values = [];

//   input.forEach((input) => {
//     if (input.startsWith('(') || input.startsWith('[')) {
//       comments.push(input);
//     } else {
//       const [value, comment] = input.split(' = ');
//       values.push({ value, comment });
//     }
//   });
// }
