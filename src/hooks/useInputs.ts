import type { INPUTS } from "interface/List.interface"
import { ChangeEvent,useCallback, useState } from "react"
function useInputs(initialForm:INPUTS):any{
    const [form,setForm] = useState<INPUTS>(initialForm)

    //change
    const change = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target
        setForm(form => ({...form,[name]:value}))
    },[])

    const reset = useCallback(()=> setForm(initialForm),[initialForm])

    return [form,change,reset];
}

export default useInputs