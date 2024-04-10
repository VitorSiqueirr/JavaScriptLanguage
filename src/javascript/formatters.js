const formatters = {
  toNumber: Number,
  toCurrency: (value) =>
    new Intl.NumberFormat("PT-br", {
      style: "currency",
      currency: "BRL",
    }).format(value),
  toSexGenre: (value) => {
    if (value === "masculino") {
      return "Masculino";
    } else if (value === "feminino") {
      return "Feminino";
    }
    return "Outro";
  },
};
