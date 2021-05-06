import React, { useEffect } from 'react'
import axios from 'axios'
import dotenv from 'dotenv'
import {RETRIEVE_URL} from '../Constants'

const UrlPage = (props) => {
  const {url} = props.params
  useEffect(() => {
    axios({
      url: RETRIEVE_URL,
      data:{ short_url: url },
      headers: {'Authorization': 'CollaborativeDisruption2021', 'Content-Type': 'application/json'},
      method: 'post'
    }).then(res => {
      const link = res.data.data
      window.location.href = link
    }).catch(err => console.error("ini errornya",err))
  }, [])
  return(<div>
    hei
  </div>)
}

export default UrlPage