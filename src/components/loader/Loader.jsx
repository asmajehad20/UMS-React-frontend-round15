import React from 'react'
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <>
            <h2>please wait</h2>;
            <div className= {`text-center ${style.loading} `}>
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </>
  )
}
