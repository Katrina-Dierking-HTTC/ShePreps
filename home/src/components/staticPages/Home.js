import React from 'react'
import styled from 'styled-components'

export default function Home (){
    return (
        <>
        <TopWrap>
            <Nav>
                <ul></ul>
            </Nav>
        </TopWrap>

        <BodyWrap>
            <h2 className = "homeTitle">Welcome to She Preps</h2>
            <h3 className = "homeDescription">All things prepper -- done HER way!</h3>

        </BodyWrap>
        </>
    )
}