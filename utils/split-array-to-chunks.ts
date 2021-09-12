// Taken from @dbasch: https://stackoverflow.com/a/19679493

export const splitArrayToChunks = (arrayToSplit: any[], chunkSize: number) => {
  return arrayToSplit
    .map((item, index) => {
      return index % chunkSize === 0
        ? arrayToSplit.slice(index, index + chunkSize)
        : null;
    })
    .filter((item) => item);
};
