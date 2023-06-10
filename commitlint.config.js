module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0, "always"], // allow sentence-case, start-case, pascal-case, upper-case
    "header-max-length": [2, "always", Infinity],
  },
};
