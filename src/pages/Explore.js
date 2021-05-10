import React from "react"
import { Figure } from "react-bootstrap"
import MediaQuery from "react-responsive"
import { Route, Switch } from "react-router-dom"
import FollowCard from "../components/FollowCard"
import Heading from "../components/Heading"
import SearchBar from "../components/SearchBar"
import Trends from "../components/Trends"
import UserSuggestions from "../components/UserSuggestions"

export default function Explore({ noSearchBar }) {
  return (
    <>
      <div className="header">
        {!noSearchBar && (
          <MediaQuery maxWidth={1020}>
            <SearchBar className="w-100 p-2" />
          </MediaQuery>
        )}
      </div>
      <Switch>
        <Route path="/explore/users">
          <Heading title="Users" />
          <UserSuggestions length={5} noPop />
        </Route>
        <Route path="/">
          <MediaQuery maxWidth={992}>
            <FollowCard length={4} noPop title="follow more Tosks" />
          </MediaQuery>
          <Heading title="trends near you" />
          <Figure className="d-flex flex-column">
            <Figure.Image src="/img/twitter-home.png" alt="ternds" />
          </Figure>
          <Trends length={4} />
        </Route>
      </Switch>
    </>
  )
}
