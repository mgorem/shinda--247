import { useState } from 'react';
import styled from 'styled-components'
// import { feeds } from '../../userfeed';


const SingleCardContainer = styled.div`
  width: 90%;
  height: 6%;
  margin: 14px auto 10px auto;
  border: none;
  border-radius: 8px;
  background-color: #242832;
  color: #fff;
  overflow: hidden;
`
const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px auto;
  
`
const InnerNameContainer = styled.div`
  
`
const InnerStatsContainer = styled.div`
  width: 50px;
  height: 25px;
  padding: 5px;
  margin-right: 20px;
  border: none;
  border-radius: 25px;
  background-color: #ff7f00;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
`
const InnerAmountContainer = styled.div`
  
`
const RightSection = () => {

  const [feeds, setFeeds] = useState([
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
    {id: 1, name: "John land", stats: "2.2x", amount: 3000},
  ])
  return (
    <>
    {feeds.map((feed) => (
    <SingleCardContainer key={feeds.id}>
          <CardContainer>
            <InnerNameContainer style={{marginLeft:"20px"}}>
              {feeds.name}
            </InnerNameContainer>
            <InnerStatsContainer>
              {feeds.stats}
            </InnerStatsContainer>
            <InnerAmountContainer style={{marginRight:"20px"}}>
              {feeds.amount}
            </InnerAmountContainer>
          </CardContainer>
    </SingleCardContainer>
    ))}
    </>
  )
}

export default RightSection