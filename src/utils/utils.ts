export function formatName(name: string) {
  return name.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function formatNumber(num: number): string {
  let numStr = num.toString();
  
  while (numStr.length < 3) {
      numStr = '0' + numStr;
  }
  
  return numStr;
}