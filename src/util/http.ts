export const get = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("An error occurred!");
  }

  const data = (await response.json()) as unknown;
  return data;
};
