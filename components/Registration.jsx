const React = require("react");
const Layout = require("./Layout");

function Registration({ title }) {
  return (
    <Layout title={title}>
      <div className="center-container__sign">
        <div className="registration">
          <form
            className="registration__form"
            action="/api/registration"
            method="POST"
          >
            <input
              className="registration__form-input"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="registration__form-input"
              type="password"
              name="password"
              placeholder="password"
            />
            <input
              className="registration__form-input"
              type="text"
              name="email"
              placeholder="email"
            />
            <button className="form__input-button button" type="submit">
              Ok
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Registration;
