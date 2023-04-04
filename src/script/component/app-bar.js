class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        header {
          display: inline;
          text-align: center;
        }
        
        .jumbotron {
          font-size: 20px;
          padding: 30px;
          text-align: center;
          color: white;
          background-color: #e9a019;
        }
        :host {
          display: block;
          position: sticky;
          width: 100%;
          background-color: #e9a019;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2 {
          padding: 16px;
        }
      </style>
      <div class="jumbotron">
        <h1>FoodMeal Apps</h1>
        <h4>Aplikasi manajemen buku dengan memanfaatkan localStorage untuk menyimpan data</h4>
      </div>
      <h2>The MealDB</h2>`;
  }
}

customElements.define("app-bar", AppBar);
