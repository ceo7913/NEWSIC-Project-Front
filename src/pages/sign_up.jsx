import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react"
import { SuccessLog } from "../components";

const SignUp = () => {
  const [isCreator, setIsCreator] = useState(false);
  const userNameRef = useRef();
  const userEmailInput = useRef();

  const [isFalseText, setIsFalseText] = useState();
  const falseText = () => {
    setIsFalseText(!isFalseText);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  let [isInputClicked, setIsInputClicked] = useState(false);

  const backgroundColorControls = useAnimation();
  const backgroundColorControls2 = useAnimation();
  useEffect(() => {
    if (isCreator === false) {
      backgroundColorControls.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isCreator, backgroundColorControls]);
  useEffect(() => {
    if (isCreator === true) {
      backgroundColorControls2.start({ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "rgba(255, 255, 255, 1)", border: "1px solid rgba(255, 255, 255, 0.1)" });
    } else {
      backgroundColorControls2.start({ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.2)", border: "none" });
    }
  }, [isCreator, backgroundColorControls2]);
  return (
    <div className="signUpPageBackGround">
      <AnimatePresence>{modalOpen && <SuccessLog modalOpen={modalOpen} handleClose={close} />}</AnimatePresence>
      <div className="signUpFrame">
        <div className="signUpSection">
          <div className="signUpTitle" onClick={falseText}>
            SIGN UP
          </div>
          <div className="signUpInputSection">
            <div className="userNameSection">
              <div className="nameText">USER NAME</div>
              <motion.div className="nameInput" initial={{ x: 0 }} animate={isFalseText ? { x: [0, -15, 15, 0] } : { x: 0 }} style={isFalseText ? { border: "1px solid red" } : { border: "1px solid white" }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                <input
                  ref={userNameRef}
                  type="text"
                  name="user_name"
                  onFocus={() => {
                    setIsInputClicked(true);
                  }}
                  onBlur={() => {
                    setIsInputClicked(false);
                  }}
                  placeholder={isInputClicked === true ? "" : "닉네임은 10자 이내, 공백, 특수문자 사용불가"}
                  className="signUpUserNameInput"
                />
              </motion.div>
            </div>
            <div className="userEmailSection">
              <div className="emailText">USER E-MAIL</div>
              <motion.div className="emailInput" initial={{ x: 0 }} animate={isFalseText ? { x: [0, -15, 15, 0] } : { x: 0 }} style={isFalseText ? { border: "1px solid red" } : { border: "1px solid white" }} transition={{ duration: 0.25, ease: "easeInOut" }}>
                <input ref={userEmailInput} type="text" name="user_email" />
              </motion.div>
            </div>
          </div>
          <div className="signUpChoiceSection">
            <div className="signUpinfoText">what is your purpose?</div>
            <div className="signUpButtonSection">
              <motion.div className="userButton" animate={backgroundColorControls} onTap={() => setIsCreator(false)}>
                USER
              </motion.div>
              <motion.div className="creatorButton" animate={backgroundColorControls2} onTap={() => setIsCreator(true)}>
                CREATOR
              </motion.div>
            </div>
          </div>
          <div className="signUpButtonFrame">
            <div className="signUpButton">
              SIGN UP
            </div>
          </div>
        </div>
        <div className="imgSection" onClick={() => (modalOpen ? close() : open())} />
      </div>
    </div>
  );
};

export default SignUp;
