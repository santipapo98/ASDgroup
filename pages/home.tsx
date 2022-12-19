import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import { fetchCryptoData } from '../utils/fetchCryptoData'
import styles from '../styles/Globals.module.scss'
import moment from 'moment'
import swal from 'sweetalert'

type Props = {
  cryptoData: any
}

const allowedData = ['symbol', 'quoteAsset', 'openPrice', 'lowPrice', 'highPrice', 'lastPrice', 'at']
const dataTypes = [{
  field: 'symbol',
  type: 'string',
}, {
  field: 'quoteAsset',
  type: 'string',
},
{
  field: 'openPrice',
  type: 'number',
},
{
  field: 'lowPrice',
  type: 'number',
},
{
  field: 'highPrice',
  type: 'number',
},
{
  field: 'lastPrice',
  type: 'number',
},
{
  field: 'at',
  type: 'string',
},
]

const filterData = (data: any) => {
  const filteredData = data?.map((singleData: any) => {
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

const stringOrder = (data: any, selector: any, order: boolean) => {
  // For the order variable, it recieves a false in case the order is descending or a true for ascending
  return [...data].sort((a: any, b: any) => {
    let textA = a[selector].toUpperCase()
    let textB = b[selector].toUpperCase()
    if (order) {
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
    } else {
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

  })
}

const numberOrder = (data: any, selector: any, order: boolean) => {
  // For the order variable, it recieves a false in case the order is descending or a true for ascending
  return [...data].sort((a: any, b: any) => {
    if (order) {
      return a[selector] - b[selector]
    } else {
      return b[selector] - a[selector]
    }
  })
}

function home({ cryptoData }: Props) {

  const [data, setData] = useState(filterData(cryptoData))

  useEffect(() => {
    if (!data) {
      swal({
        title: "We could not retrieve the information!",
        text: "Please try again",
        icon: "error",
        buttons: ["Reload Page", "Close"],
        dangerMode: true,
      }).then((willDelete) => {
        if (!willDelete) {
          location.reload();
        }
      });
    }
  }, [cryptoData])

  return (
    <div className={styles.tableContainer}>
      <h1>Crypto Information</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {data && Object.keys(data[0])?.map((key: any, index: number) => {
              return <>
                <th key={index}>
                  {key}
                  <div className={styles.ordering}>
                    <span onClick={() => { dataTypes[index].type === 'string' ? setData(stringOrder(data, dataTypes[index].field, false)) : setData(numberOrder(data, dataTypes[index].field, false)) }}>&uarr;</span>
                    <span onClick={() => { dataTypes[index].type === 'string' ? setData(stringOrder(data, dataTypes[index].field, true)) : setData(numberOrder(data, dataTypes[index].field, true)) }}>&darr;</span>
                  </div>
                </th>
              </>
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((list: any) => {
            return <tr key={list.symbol}>
              {Object.values(list).map((item: any, index: number) => {
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
    },
    revalidate: 86400,
  }
}