import React from "react"
import { ListGroup } from "react-bootstrap"
import PostItem from "./PostItem"
import Spinner from "./Spinner"

export default function PostsList(props) {
  const { posts, isLoading, isSuccess, no_reply_tag } = props
  // console.log(posts)
  if (isLoading) return <Spinner />
  return (
    <ListGroup variant="flush" className="border-bottom">
      {isSuccess ? (
        posts.map(
          (elem) =>
            elem && (
              <PostItem
                key={elem._id}
                post={elem}
                no_reply_tag={no_reply_tag}
              />
            )
        )
      ) : (
        <div className="message">No posts for you, not now, not never</div>
      )}
    </ListGroup>
  )
}
