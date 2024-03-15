export const getNewStr = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getRoundNumber = (rating: number) => `${String(Math.round(rating) * 2)}`;

