import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { fetchCryptoData } from '../utils/fetchCryptoData'
import styles from '../styles/Globals.module.scss'
import moment from 'moment'
import { setEnvironmentData } from 'worker_threads'

type Props = {
  cryptoData: any
}

const allowedData = ['symbol', 'quoteAsset', 'openPrice', 'lowPrice', 'highPrice', 'lastPrice', 'at']

const filterData = (data: any) => {
  var d = new Date(0);
  const filteredData = data.map((singleData: any) => {
    return Object.keys(singleData).filter(key => allowedData.includes(key)).reduce((obj: any, key: any) => {
      if (key === 'at') {
        obj[key] = moment(Number(singleData[key])).format('L');
      } else {
        obj[key] = singleData[key];
      }
      return obj;
    }, {})
  })
  return filteredData
}

const orderData = (data: any) => {
  return data.sort(function (a: any, b: any) {
    let textA = a.symbol.toUpperCase()
    let textB = b.symbol.toUpperCase()
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })
}


function home({ cryptoData }: Props) {

  const [data, setData] = useState(filterData(cryptoData))

  console.log(data)

  return (
    <div className={styles.tableContainer}>
      <h1>Crypto Information</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => {
              return <th key={index} onClick={() => orderData(data)}>
                {key}
              </th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((list: any, index: number) => {
            return <tr key={index}>
              {Object.values(list).map((item: any, index) => {
                return <td key={index}>{item}</td>
              })
              }
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default home

export const getStaticProps: GetStaticProps<Props> = async () => {

  const cryptoData = await fetchCryptoData();

  return {
    props: {
      cryptoData
    }
  }
}