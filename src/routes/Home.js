import React, {useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Texteffect from "./Texteffect";

export default function App() {
    useEffect(() => {
        const span_html_divOpen = document.querySelector(".span_html_divOpen");
        span_html_divOpen.textContent = "<div ";
        const span_html_className = document.querySelector(".span_html_className")
        span_html_className.textContent = "className=";
        const span_html_classValue = document.querySelector(".span_html_classValue")
        span_html_classValue.textContent = "\"rect\">";
        const span_html_Value = document.querySelector(".span_html_Value")
        span_html_Value.textContent = "hello world";
        const span_html_disClose = document.querySelector(".span_html_divClose")
        span_html_disClose.textContent = "</div>"
    }, [])
    return(
        <>
            <div className="main">
                <h1 className="main-h1">이제는 editor를 굳이 다운받지 않아도 되는 시대입니다! <br /> 지금부터 Convenient code와 함께 하세요!</h1>
                <p className="main-detail-p">이 웹사이트애서 codesandbox, codepen과 같은 온라인 코드 에디터를 체험할 수 있습니다.</p>
                <p className="section-detail-p">코딩을 시작하고 싶으면 밑에 있는 버튼을 클릭하세요</p>
                <Link to="/code-editor"><button className="btn btn-swap">start coding <span>code now</span></button></Link>
                <div className="right-container">
                    <div className="right-box">
                        <h2 className="title"><FontAwesomeIcon icon={faGear} width="15px" height="15px" /> HTML</h2>
                        <span className="span_html_divOpen"></span>
                        <span className="span_html_className"></span>
                        <span className="span_html_classValue"></span>
                        <span className="span_html_Value"></span>
                        <span className="span_html_divClose"></span>
                    </div>
                    <div className="right-box">
                        <h2 className="title"><FontAwesomeIcon icon={faGear} width="15px" height="15px" /> CSS</h2>
                        <Texteffect lang="css" />
                    </div>
                    <div className="right-box">
                        <h2 className="title"><FontAwesomeIcon icon={faGear} width="15px" height="15px" /> JavaScript</h2>
                        <Texteffect lang="javascript" />
                    </div>
                </div>
            </div>
            <div className="section-advantage">
                <h2>
                    Convenient code만의 특별한 점
                </h2>
                <div className="section_box">
                    <div className="box_title">1. localstorage를 사용하여 따로 저장할 필요 없음.</div>
                    <div className="box_explain">
                        <p>localstorage에 실시간으로 HTML, CSS, JS 코드를 저장하여 새로고침을 해도 그대로 남아 있고 <br />
                            따로 저장을 하지 않아도 됩니다. 
                        </p>
                    </div>
                </div>
                <div className="section_box">
                    <div className="box_title">2. 언제 어디서든 제약 없이 코드를 짤 수 있는 온라인 플랫폼</div>
                    <div className="box_explain">
                        <p>VSCode 같은 다운로드 에디터들은 특정 장소(군대, 학교 등)에서 사용을 하지 못합니다. <br />
                            하지만 Convenient code는 웹 에디터이기 때문에 따로 설치하지 않아도 되어서 제약이 없습니다.
                        </p>
                    </div>
                </div>
                <div className="section_box">
                    <div className="box_title">3. 코드를 적으면 저장 없이 바로 실행이 되는 온라인 플랫폼</div>
                    <div className="box_explain">
                        <p>VSCode 같은 에디터들은 코드를 짜고 나면 꼭 Ctrl + S 를 눌러서 저장을 해야 되서 불편합니다. <br />
                            그래서 Convenient code는 저장을 하지 않아도 자동 저장되게 개발했습니다.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}