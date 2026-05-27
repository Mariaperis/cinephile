export const getImageUrl = (
  path
) => {

  if (!path) {
    return "/fallback.jpg";
  }

  return `
    https://image.tmdb.org/t/p/w500${path}
  `;
};