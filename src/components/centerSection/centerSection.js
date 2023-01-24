import bgImage from "../../assets/bg.jpg"
import DummyData from "../dummyData/dummyData";
import LoginForm from "../loginForm/loginForm"

const CenterSection = ({isLogin,showLogin, setIsLogin}) => {

    return(
        <>
            <div className="position-relative ">
                <img src={bgImage} alt="bg-image" className="w-100" />
                <div className="position-absolute d-flex justify-content-center w-100" style={{top: '100px'}}>
                    {!isLogin && showLogin &&
                        <LoginForm 
                            setIsLogin={setIsLogin}
                        /> 
                    }
                    {isLogin &&
                        <DummyData /> 
                    }
                </div>
            </div>
        </>
    )
}

export default CenterSection ;