import RegisterImage from "../../assets/images/Register-img.svg"
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import { RegisterButton, RegisterDesc, RegisterForm, RegisterImg, RegisterImgBox, RegisterInner, RegisterInput, RegisterInputLabel, RegisterInvalidMessage, RegisterLink, RegisterTitle, RegisterWrapper } from "./Register.style";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToken } from "../../redux/token/tokenActions";
// import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux/es/exports";
import { language } from "../../Lang/Lang";
export const Register = () => {
    const {lang} = useSelector((state) => state.lang)
    // const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const schema = Yup.object({
        first_name: Yup.string().min(3, "First name must be at least 3 characters long").required("Required"),
        last_name: Yup.string().min(3, "Last name must be at least 3 characters long").required("Required"),
        phone: Yup.string().length(9, "Phone length must be 9 characters long").required("Required"),
        email: Yup.string().email("Invalid Format").required("Required"),
        password: Yup.string().min(1, "Min 3").max(10, "Max 10").required("Required"),
    }).required();

    const { register, handleSubmit, formState:{ errors, isValid } } = useForm({
        mode: "onBlur",
        defaultValues: {
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    const onPost = (data) => {
        console.log(data)
        axios.post("http://localhost:5000/user/register", data).then(res => {
            console.log(res);
            if(res.status === 201){
                dispatch(addToken(res.data.token));
                localStorage.setItem("token", res.data.token)
                navigate("/")
            }
        }).catch(error => console.log(error))
    }
    return<>
        <RegisterWrapper>
            <RegisterInner>
                <RegisterImgBox>
                    <RegisterImg src={RegisterImage}/>
                </RegisterImgBox>
                <RegisterForm onSubmit={handleSubmit(onPost)}>
                    <RegisterTitle>
                        {/* {t("register.title")} */}
                        {language[lang].register.title}
                    </RegisterTitle>
                    <RegisterDesc>
                    {
                        // t("register.quation")
                        language[lang].register.quation
                    } <RegisterLink to="/login">{
                        // t("register.quationLink")
                        language[lang].register.quationLink
                    }</RegisterLink>
                    </RegisterDesc>

                    <RegisterInputLabel>
                        <RegisterInput type="text" aria-label="Enter your First Name" {...register("first_name")} placeholder={
                            // t("register.fName")
                            language[lang].register.fName
                        }/>
                        {errors.first_name?.message ? (
                            <RegisterInvalidMessage>
                                {errors.first_name?.message}
                            </RegisterInvalidMessage>
                        ) : ""}
                    </RegisterInputLabel>

                    <RegisterInputLabel>
                        <RegisterInput type="text" aria-label="Enter your Last Name" {...register("last_name")} placeholder={
                            // t("register.lName")
                            language[lang].register.lName
                        }/>
                        {errors.last_name?.message ? (
                            <RegisterInvalidMessage>
                                {errors.last_name?.message}
                            </RegisterInvalidMessage>
                        ) : ""}
                    </RegisterInputLabel>

                    <RegisterInputLabel>
                        <RegisterInput type="tel" aria-label="Enter your phone number" {...register("phone")} placeholder={
                            // t("register.phone")
                            language[lang].register.phone
                        }/>
                        {errors.phone?.message ? (
                            <RegisterInvalidMessage>
                                {errors.phone?.message}
                            </RegisterInvalidMessage>
                        ) : ""}
                    </RegisterInputLabel>

                    <RegisterInputLabel>
                        <RegisterInput type="email" aria-label="Enter your email" {...register("email")} placeholder={
                            // t("register.email")
                            language[lang].register.email
                        }/>
                        {errors.email?.message ? (
                            <RegisterInvalidMessage>
                                {errors.email?.message}
                            </RegisterInvalidMessage>
                        ) : ""}
                    </RegisterInputLabel>

                    <RegisterInputLabel>
                        <RegisterInput type="password" aria-label="Enter your password" {...register("password")} placeholder={
                            // t("register.password")
                            language[lang].register.password
                        }/>
                        {errors.password?.message ? (
                            <RegisterInvalidMessage>
                                {errors.password?.message}
                            </RegisterInvalidMessage>
                        ) : ""}
                    </RegisterInputLabel>

                    <RegisterButton type="submit">
                        {/* {t("button.nextStep")} */}
                        {language[lang].button.nextStep}
                    </RegisterButton>
                </RegisterForm>
            </RegisterInner>
        </RegisterWrapper>
    </>
}
