import { useEffect, useState } from "react";

export function LoadPayhereScript() {
    const [script, setScript] = useState([]);

    useEffect(() => {
        const script_ = document.createElement("script");
        script_.src = "https://www.payhere.lk/lib/payhere.js";
        script_.type = "text/javascript";
        document.body.appendChild(script_);
        return () => {document.body.removeChild(script_);};
    }, []);
    return (<></>);
}