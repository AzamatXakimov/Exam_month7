import { LoginButton, LoginDesc, LoginForm, LoginImg, LoginImgBox, LoginInner, LoginInput, LoginInputLabel, LoginInvalidMessage, LoginLink, LoginTitle, LoginWrapper } from "./Login.style";
import LoginImage from "../../assets/images/Login-img.svg"
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { addToken } from "../../redux/token/tokenActions";
import { useSelector } from "react-redux/es/exports";
import { language } from "../../Lang/Lang";
// import { useTranslation } from 'react-i18next';
export const Login = () => {
    const {lang} = useSelector((state) => state.lang)

    // const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const schema = Yup.object({
        email: Yup.string().email("Invalid Format").required("Required"),
        password: Yup.string().min(3, "Min 3").max(10, "Max 10").required("Required"),
    }).required();

    const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    const onPost = (data) => {
        axios.post("http://localhost:5000/user/login", data).then(res => {
            console.log(res);
            if(res.status === 201){
                dispatch(addToken(res.data.token));
                localStorage.setItem("token", res.data.token)
                navigate("/")
            }
        }).catch(error => console.log(error))
    }
    return<>
        <LoginWrapper>
            <LoginInner>
                <LoginImgBox>
                    <LoginImg src={LoginImage}/>
                </LoginImgBox>
                <LoginForm onSubmit={handleSubmit(onPost)}>
                    <LoginTitle>
                        {/* {t("login.title")} */}
                        {language[lang].login.title}
                    </LoginTitle>
                    <LoginDesc>
                    {
                        // t("login.quation")
                        language[lang].login.quation
                    } <LoginLink to="/register">{
                        // t("login.quationLink")
                        language[lang].login.quationLink
                    }</LoginLink>
                    </LoginDesc>
                    <LoginInputLabel>
                        <LoginInput type="email" aria-label="Enter your email" {...register("email")} placeholder={
                            // t("login.email")
                            language[lang].login.email
                        }/>
                        {errors.email?.message ? (
                            <LoginInvalidMessage>
                                {errors.email?.message}
                            </LoginInvalidMessage>
                        ) : ""}
                    </LoginInputLabel>
                    <LoginInputLabel>
                        <LoginInput type="password" aria-label="Enter your password" {...register("password")} placeholder={
                            // t("login.password")
                            language[lang].login.password
                        }/>
                        {errors.password?.message ? (
                            <LoginInvalidMessage>
                                {errors.password?.message}
                            </LoginInvalidMessage>
                        ) : ""}
                    </LoginInputLabel>
                    <LoginButton type="submit">
                        {/* {t("button.nextStep")} */}
                        {language[lang].button.nextStep}
                    </LoginButton>
                </LoginForm>
            </LoginInner>
        </LoginWrapper>
    </>
}
