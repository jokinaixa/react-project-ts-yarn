export const drinkAll = (callback: any, flavour: string) => {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

export default drinkAll;