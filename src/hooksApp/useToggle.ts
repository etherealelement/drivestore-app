import { useState } from "react";


function useToggle  (inValue:boolean){
    const [value, setValue] = useState<boolean>(inValue);
    

    const toggle = () => {
        setValue(e => !e);
    }

    return [value, toggle];
}

export default useToggle;
