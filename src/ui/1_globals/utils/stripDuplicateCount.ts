export default (name: string) => name.replace(/(?<!^|\.)_\d+((?:\.[a-z\d]+)+)$/i, '$1');
