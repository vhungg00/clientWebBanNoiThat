import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import queryString from "query-string";
function Auth() {
 
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Wrapper>
      <div className="auth">
        <PageHero tytle={"Auth"} />
        <div className="container-auth">
          <div className="grid wide">
            <form action="#" className="auth__form">
              <div className="auth__form-wrapper">
                <div className="auth__form-switch">
                  <h3
                  className= {isLogin ? "active": ""}
                   onClick={() => setIsLogin(true)}>Login</h3>
                  <span></span>
                  <h3
                  className= {!isLogin ? " active": ""}
                   onClick={() => setIsLogin(false)}>Register</h3>
                </div>
                <div className="form__group">
                  {!isLogin && 
                  <input
                    type="text"
                    className="form__group-inputElement"
                    placeholder="Name"
                  />}
                  <input
                    type="text"
                    className="form__group-inputElement"
                    placeholder="Email"
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__group-inputElement"
                    placeholder="Password"
                  />
                </div>
                <button
                 className="btn" type="submit">
                  {isLogin ? "Login" : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .auth__form {
    .auth__form-wrapper {
      width: 80%;
    }
    padding: 2rem;
    border: 1px solid #ccc;
    min-width: 300px;
    width: 60%;
    margin: 62px auto;
    display: flex;
    justify-content: center;
    .auth__form-switch {
      display: flex;
      justify-content: center;
      position: relative;
      h3 {
        border: none;
        background: none;
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
        margin: 0;
      }
        .active {
        color: var(--primary-color);
      }
      span {
        display: block;
        width: 2px;
        height: 20px;
        margin: 0 20px;
        background-color: var(--primary-color);
      }
    }
    .form__group {
      .form__group-inputElement {
        width: 100%;
        outline: none;
        margin-top: 20px;
        padding: 12px 10px;
        border: 1px solid #ccc;
      }
    }
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default Auth;
