import React from 'react'
import { FaSpinner} from 'react-icons/fa';
import s from "./Spinner.module.css"
export default function spinner() {
  return (
  <div className={s.spinner}>
   <FaSpinner size={40} />
    </div>
  )
}
