import Button from "./Button";
import { forwardRef, useState } from "react";

const IS_LOCAL = false;
const API_URL = IS_LOCAL
  ? "http://localhost:5000"
  : "https://185xknb9yl.execute-api.us-east-1.amazonaws.com";

export const Input = forwardRef(
  ({ name, label, type = "text", error, ...props }, ref) => {
    return (
      <>
        <div className="form-row">
          {label && <label htmlFor={name}>{label}</label>}
          <input id={name} name={name} type={type} ref={ref} {...props} />
        </div>
        {error && <div className="error">{error}</div>}
        <style jsx>{`
          .form-row {
            display: flex;
            padding: 6px 0;
            max-width: 100%;
          }
          .form-row > label {
            font-size: 16px;
            line-height: 30px;
            margin-right: 20px;
            align-self: center;
            flex: 20%;
          }
          .form-row > input {
            background-color: #eff1f9;
            font-size: 15px;
            color: grey;
            padding: 10px 20px;
            flex: 80%;
            align-self: center;
            border: none;
            outline: none;
            width: auto;
            border-radius: 4px;
            border: 1px solid;
            border-color: ${error ? "#ca3c25" : "#ddd"};
          }

          .error {
            text-align: right;
            font-size: 12px;
            color: #ca3c25;
          }

          @media screen and (max-width: 768px) {
            .form-row {
              display: flex;
              flex-wrap: wrap;
              padding: 6px 0;
              max-width: 600px;
            }
          }
        `}</style>
      </>
    );
  }
);

export const TextArea = forwardRef(({ name, label, error }, ref) => {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} name={name} rows="4" ref={ref} />
      </div>
      {error && <div className="error">{error}</div>}
      <style jsx>{`
        .form-row {
          display: flex;
          padding: 6px 0;
          max-width: 100%;
        }
        .form-row > label {
          font-size: 16px;
          line-height: 30px;
          margin-right: 20px;
          flex: 20%;
        }
        .form-row > textarea {
          background-color: #eff1f9;
          font-size: 15px;
          color: grey;
          padding: 10px 20px;
          flex: 80%;
          align-self: center;
          border: none;
          outline: none;
          width: auto;
          border-radius: 4px;
          border: 1px solid;
          font-family: inherit;
          border-color: ${error ? "#ca3c25" : "#ddd"};
        }

        .error {
          text-align: right;
          font-size: 12px;
          color: #ca3c25;
        }

        @media screen and (max-width: 768px) {
          .form-row {
            display: flex;
            flex-wrap: wrap;
            padding: 6px 0;
          }
        }
      `}</style>
    </>
  );
});

const Form = ({ onSubmit, children }) => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const data = onSubmit(event);
      const response = await fetch(`${API_URL}/dev/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      if (response.success === true) {
        setLoading(false);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {children}
        <div className="button">
          <Button disabled={loading} type="submit" style={{ width: "100%" }}>
            {loading ? "Loading..." : "Submit"}
          </Button>
        </div>
      </fieldset>
      <style jsx>{`
        form {
          height: auto;
          width: 60%;
          background-color: #fee4c7;
          border: 2px solid #810000;
          box-shadow: 4px 4px 4px #810000;
        }

        fieldset {
          border: none;
          margin: 0;
          padding: 40px;
        }

        .button {
          margin: 20px 0;
        }

        @media screen and (max-width: 768px) {
          form {
            width: 100%;
          }
          fieldset {
            padding: 20px;
          }
        }
      `}</style>
    </form>
  );
};

export default Form;
