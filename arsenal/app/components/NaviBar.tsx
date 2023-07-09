'use client'

import { Navbar, Link, Text, Button } from "@nextui-org/react";
import { Logo } from "./Logo";


export const NaviBar=()=> {
  const collapseItems = [

    "List",
    "Create New Player",
  ];

  return (
      <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Logo />
     
        <Text b color="inherit" hideIn="xs" >
          ALLTHATARSENAL
        </Text>
   
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/list">Player LIST</Navbar.Link>
        <Navbar.Link href="createnewplayer">Create New Player</Navbar.Link>
  
        
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="/register">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
          </Button>
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
            href={item.toLowerCase().split(' ').join('')}
          >
            {item} 
          </Link>
        </Navbar.CollapseItem>
      ))}
      </Navbar.Collapse>
      </Navbar>
  )
}
