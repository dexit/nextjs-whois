const development = {
  URL: "http://localhost:3000",
};

const production = {
  URL: "https://whois-v2.caliph.my.id",
};

module.exports =
  process.env.NODE_ENV === "production" ? production : development;
