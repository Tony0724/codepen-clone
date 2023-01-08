import React from "react";
import Typed from "react-typed";
import "./Texteffect.css";

function Texteffect({lang}) {
    if(lang === "css") {
        return (
            <>
                <Typed strings={[
                    `<span style="color:#e1ca72">h1</span> <span style="color:"> { </span> \n     <span style="color:#9f8198">color:</span><span style="color:#de7300">red</span>; \n }`,
                    `<span style="color:#e1ca72">.rect</span> { \n    <span style="color:#9f8198">background</span>: <span style="color:#e1ca72">linear-gradient</span>( \n      <span style="color:#de7300">-119deg,</span> \n     <span style="color:#e1ca72">$gray</span> <span style="color:#de7300">0%,</span> \n     <span style="color:#e1ca72">$dark-gray</span> <span style="color:#de7300">100%</span>); \n  }`,
                ]} typeSpeed={150} backSpeed={50} backDelay={150} loop />
            </>
        )
    } else if(lang === "javascript") {
        return (
            <>
                <Typed strings={[
                    `<span style="color:#e1ca72">var</span> <span style="color:#7a99ad">colors</span> = [<span style="color:#74b087">"#74B087","#DE7300","#74B087"</span>];  \n \n <span style="color:purple">function</span> <span style="color:#7a99ad">animate()</span> {};`,
                    `<span style="color:#e1ca72">const</span> <span style="color:#7a99ad">p</span> = <span style="color:#74b087">document</span>.<span style="color:#e1ca72">getElementById("D-day_text")</span>\n<span style="color:#e1ca72">const</span> <span style="color:#7a99ad">h2</span> = <span style="color:#74b087">document</span>.<span style="color:#e1ca72">querySelector("h2.D-day")</span>\n<span style="color:#e1ca72">const</span> <span style="color:#7a99ad">today</span> = <span style="color:#74b087">new</span> <span style="color:#e1ca72">Date()</span>\n<span style="color:#e1ca72">const</span> <span style="color:#7a99ad">christmas<span> = <span style="color:#74b087">new</span> <span style="color:#e1ca72">Date(today.getFullYear(), 11, 25)</span>\n\n<span style="color:#74b087">if(today.getMonth() === 11 && today.getDate() >= 25)</span> { \n<span style="color:#e1ca72">christmas</span>.<span style="color:#74b087">setFullYear(christmas.getFullYear() + 1)</span>\n}`
                ]} typeSpeed={150} backSpeed={50} backDelay={150} loop />
            </>
        )
    } else {
        return (
            <>
                <p>Sorry, but this lang that you said is not exist</p>
            </>
        )
    }
}

export default Texteffect;