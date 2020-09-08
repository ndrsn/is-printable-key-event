import keys from './keys';

const allKeys: string[] = Object.keys(keys).reduce(function (all: string[], category) {
  return all.concat(keys[category]);
}, []);

export default function isPrintableKeyEvent(event: KeyboardEvent) {
  return allKeys.indexOf(event.key) === -1;
}
