const categories = require("./data/categories");
const games = require("./data/games");

exports.createPages = async ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data
  // const games = await getPokemonData(["pikachu", "charizard", "squirtle"]);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/home.js"),
    context: { games },
  });

  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/templates/category-list.js"),
  //   context: { categories, games },
  // });

  categories.forEach((category) => {
    createPage({
      path: `/category/${category.slug}/`,
      component: require.resolve("./src/templates/category.js"),
    });
  });

  // Create a page for each Pokémon.
  games.forEach((game) => {
    createPage({
      path: `/game/${game.slug}/`,
      component: require.resolve("./src/templates/single.js"),
      context: { game },
    });
  });
};
