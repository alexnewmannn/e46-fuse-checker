// Taken from @dbasch: https://stackoverflow.com/a/19679493
// Modified to return an empty array instead of null to avoid type guard.

export const splitArrayToChunks = (
  arrayToSplit: any[],
  chunkSize: number
): any[][] => {
  return arrayToSplit
    .map((item, index): any[] => {
      return index % chunkSize === 0
        ? arrayToSplit.slice(index, index + chunkSize)
        : [];
    })
    .filter((item): boolean => !!item.length);
};
