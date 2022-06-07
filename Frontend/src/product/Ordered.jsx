import React from 'react'
import styles from "../styles/ordered.module.css"
import { useParams } from 'react-router-dom';
import { BsFillPatchCheckFill } from "react-icons/bs";


const Ordered = () => {

  const { oid } = useParams();

  return (
    <div className={styles.Main}>
      <section className={styles.Container}>
        <BsFillPatchCheckFill size={40} color={"green"} />
        <p className={styles.OrderTxt}>Thank for your purchase. Your order is placed</p>
        <p className={styles.OrderTxtO}>OrderId : <span className={styles.OID}>#{oid}</span></p>
      </section>
    </div>
  )
}

export default Ordered