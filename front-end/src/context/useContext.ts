import { useContext as useReactContext } from "react"
import { Context } from './provider'

export const useContext = () => useReactContext(Context);