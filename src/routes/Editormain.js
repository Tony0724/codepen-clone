import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import "./Editormain.css";

function Eidtormain() {
    const [html, setHtml] = useLocalStorage('html', '')
    const [css, setCss] = useLocalStorage('css', '')
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
        setSrcDoc(`
            <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
            </html>
        `)
        }, 250)

        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <>
        <div className="pane top-pane">
            <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
            />
            <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
            />
            <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
            />
        </div>
        <div className="pane">
            <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            />
            <Link to="/"><button className='back-button'>Go back home</button></Link>
        </div>
        </>
    )
}

export default Eidtormain;