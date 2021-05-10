import React from "react"
import { ListGroup } from "react-bootstrap"
import Spinner from "./Spinner"
import UserItem from "./UserItem"

export default function UsersList(props) {
  const { users, isLoading, isSuccess, length, className, ...rest } = props

  if (isLoading) {
    return <Spinner />
  }

  return (
    <ListGroup className={`border-bottom ${className}`} variant="flush">
      {isSuccess ? (
        users
          .slice(0, length)
          .map((user) => <UserItem key={user._id} user={user} {...rest} />)
      ) : (
        <div className="message font-weight-bold">
          No users to show, desverre, UsersList
        </div>
      )}
    </ListGroup>
  )
}
