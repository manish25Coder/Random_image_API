import React, { useEffect, useState } from "react";
import "./SinglePage.css"
import { useParams } from "react-router-dom";

export const SinglePage = () => {
    const[data,setData]=useState();
    const {id} = useParams()
    const getData=async()=>{
      const resp=await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const {photo}=await resp.json();
      setData(photo)
    }
  
    useEffect(()=>{
      getData()
    },[])
    return (
        <div id="singlePage">
                <img src={data?.url} alt="" />
                <div>
                    <h1>{data?.title}</h1>
                    <p>
                            {data?.description}
                    </p>
                </div>
                
        </div>
    )
}