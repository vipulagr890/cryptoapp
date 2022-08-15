import axios from 'axios';
import React, { useEffect, useState,} from 'react';
import { Table } from "react-bootstrap";


const url = "https://api.coincap.io/v2/exchanges";

const Exchanges = () => {

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
    .get(url)
    .then(response => setDataList(response.data));
  },[])

  return (
    <div>
      <Table striped bordered hover style={{color: "purple"}}>
        <thead>
          <tr>
          <th>Rank</th>
          <th>Coin</th>
          <th>% Volume</th>
          <th>$ Volume</th>
          <th>Trade Pairs</th>
          <th>Exchange URL</th>
          </tr>
        </thead>
        <tbody>
        {dataList.data?.map(val => <tr key={val.id + val.name}>
        <td>{val.rank}</td>
        <td>{val.name}</td>
        <td>{Number(val.percentTotalVolume).toFixed(3)}</td>
        <td>{Number(val.volumeUsd).toFixed(3)}</td>
        <td>{val.tradingPairs}</td>
        <td>{<a href = {val.exchangeUrl}>{val.exchangeUrl}</a>}</td>
        </tr>)}
        </tbody>
        
      </Table>
    </div>
  )
}

export default Exchanges