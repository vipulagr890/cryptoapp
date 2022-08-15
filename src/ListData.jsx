import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";


const url = 'https://api.coincap.io/v2/assets';

function ListData(props) {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
    .get(url)
    .then(response => setDataList(response.data));
  },[])

  const filteredData = dataList.data?.filter((el) => {
    if (props.input === '') {
        return el;
    }
    else {
        return el.name.toLowerCase().includes(props.input)
    }
})

  return (
    <div>
      <Table striped bordered hover style={{color: "purple"}}>
        <thead>
          <tr>
          <th>Rank</th>
          <th>Coin</th>
          <th>Symbol</th>
          <th>$ Price</th>
          <th>₹ Price</th>
          <th>supply</th>
          <th>maxSupply<br /> (In Millions)</th>
          <th>marketCapUsd <br /> (In Billions)</th>
          <th>% change 24Hr</th>
          </tr>
        </thead>
        <tbody>
        {filteredData?.map(val => <tr key={val.id + val.name}>
          <td>{val.rank}</td>
        <td>{val.name}</td>
        <td>{val.symbol}</td>
        <td>{Math.round(val.priceUsd)}</td>
        <td>{Math.round(val.priceUsd * 80)}</td>
        <td>{Math.round(val.supply)}</td>
        <td>{(val.maxSupply <= 0) ? "-" : Number(val.maxSupply / 1000000).toFixed(3)}</td>
        <td>{Number(val.marketCapUsd / 1000000000).toFixed(3)}</td>
        <td style={(val.changePercent24Hr > 0)? {color: "green"} : {color: "red"}}>{Number(val.changePercent24Hr).toFixed(2)}</td>
        </tr>)}
        </tbody>
      </Table>
    </div>
  )
}

export default ListData;