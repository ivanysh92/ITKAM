import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, requiredField} from "../Utils/Validate/validators";
import {login} from "../Redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength10 = maxLengthCreator(15);
const minLength6 = minLengthCreator(6);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                       name={"email"}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[requiredField, maxLength10, minLength6]}/>
            </div>
            <div>
                <Field type={"checkbox"}
                       name={"rememberMe"}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);