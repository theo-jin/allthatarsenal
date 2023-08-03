'use client'

import {Avatar, Navbar, Link, Text, Button } from "@nextui-org/react";
import { Logo } from "./Logo";
import SignInBtn from "./SignInBtn"
import LogOut from "./LogOutBtn"

export const  NaviBar=({session}:any)=> {
  const collapseItems = [

    "List",
    "Create New Player",
    "Player Vs Player"
  ];

  return (
      <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Navbar.Content>
        <Navbar.Link href="/">
        <Logo />
     
        <Text  b color="inherit" hideIn="xs" >
          ALLTHATARSENAL
        </Text>
        </Navbar.Link>
        </Navbar.Content>

      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/list">Player List</Navbar.Link>
        <Navbar.Link href="/createnewplayer">Create New Player</Navbar.Link>
        <Navbar.Link href="/playervsplayer">Player Vs Player</Navbar.Link>
        
      </Navbar.Content>
      <Navbar.Content>
      {session ? <LogOut/>:<SignInBtn/> }
      
        <Navbar.Item>
        {session ?   <Avatar squared 
          text={session.user.name} />:<Button auto flat as={Link} href="/register">
            Sign Up
          </Button>}
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
      {collapseItems.map((item, index) => (
       
        <Navbar.CollapseItem key={item}>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href={`/${item.toLowerCase().split(' ').join('')}`}
          >
            {item} 
          </Link>
        </Navbar.CollapseItem>
      ))}
      </Navbar.Collapse>
      </Navbar>
  )
}
