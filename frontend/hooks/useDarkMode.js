import { useLocalStorgae } from "./useLocalStorage";

export function useDarkMode (){
    const [dark, setDark] = useLocalStorgae ('darkmode',false)
    return [dark, setDark]
}