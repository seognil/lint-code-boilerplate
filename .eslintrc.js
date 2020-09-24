module.exports = {
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  settings: { react: { version: "detect" } },
};
