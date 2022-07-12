import { useState } from 'react'
import styled from 'styled-components'
import LeftSection from '../components/lefthome/LeftSection'
import CenterSection from '../components/centerhome/CenterSection'
import RightSection from '../components/righthome/RightSection'
import MenuIcon from '@mui/icons-material/Menu';

// import { feeds } from '../userfeed'
import { large } from '../large-responsive'
import { tablet } from '../tablet-responsive'
import { mobile } from '../mobile-ressponsive'
import { mini } from '../mini-responsive'


const HomeContainer = styled.div`
  display: flex;
  overflow: hidden;
  ${mobile({display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

  })}
`
const Left = styled.div`
  flex: 2;
  background-color: #242832;
  border: none;
  ${mobile({display: "none",
            
  })}
`
const Center = styled.div`
  flex: 8;
  background-color: #01060e;
  color: #fff;
  `
const Right = styled.div`
  flex: 2;
  background-color: #01060e;
  /* border-top-right-radius: 10px;
  border-bottom-right-radius: 10px; */
  ${large({oveflow: "hidden"
  })}
`

const Home = () => {

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

  const [showMenu, setShowMenu] = useState(true)

  return (
    <HomeContainer>
    <Left>
      <LeftSection />
    </Left>
    <Center>
      <CenterSection/>
    </Center>
    <Right>
      <RightSection feeds={feeds}/>
    </Right>
    </HomeContainer>
  )
}

export default Home