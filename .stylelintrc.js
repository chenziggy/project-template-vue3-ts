module.exports = {
  extends: "stylelint-config-standard",
  overrides: [
    {
      files: ["*.vue"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "selector-class-pattern": null,
    "comment-empty-line-before": null,
    "declaration-empty-line-before": null,
    "function-name-case": null,
    "rule-empty-line-before": null,
    "selector-pseudo-element-colon-notation": null,
    "unit-no-unknown": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null
  }
}
