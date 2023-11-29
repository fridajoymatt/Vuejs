const formData = {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        this.name = "";
        this.email = "";
        this.message = "";
        alert("Formulaire soumis !");
      } else {
        alert("Veuillez remplir tous les champs !");
      }
    },
  },
};

export default formData;
