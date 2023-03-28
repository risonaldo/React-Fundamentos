import { useState } from "react";

export default function TextCouter (props) {
    const [contador, setContador] = useState(5);

    return <div>
        contador: {contador}
        <input type={'text'} maxLength={props.limit} />
    </div>
}

