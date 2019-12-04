export default function linkResolver(doc) {
  // Return the path depending on Prismic Document's type
  // If it is a Single Custom Type with the API ID of "home"
  if (doc.type === "portfolio-project") {
    return "/";
  }
  // If it is a Single Custom Type with the API ID of "example"
/*   if (doc.type === "example") {
    return "/example";
  }
 */
  // Default to the root
  return "/";
}
