import React from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getTrends } from "../utils/api-client"
import { useQuery } from "react-query"
import Spinner from "./Spinner"

export default function Trends({ length }) {
  const { data: trends, isLoading, isSuccess } = useQuery("Trends", getTrends)

  if (isLoading) return <Spinner />
  if (!trends?.length) {
    return <div className="message">No trends funnet</div>
  }
  return (
    <ListGroup variant="flush">
      {isSuccess
        ? trends.slice(0, length).map((elem) => (
            <ListGroup.Item
              key={elem.name}
              as={Link}
              action
              to={`/search?q=${elem.query} `}
            >
              <small className="text-muted">Trending Worldwide</small>
              <p className="mb-1 text-dark font-weight-bold text-capitalize">
                {elem.name}
              </p>
              <em>{elem.tweet_volume} Tweets</em>
            </ListGroup.Item>
          ))
        : null}
    </ListGroup>
  )
}
