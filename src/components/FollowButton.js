import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { useAuthUser } from "../context/auth-context"
import { followUser, unfollowUser } from "../utils/api-client"

export default function FollowButton({ user }) {
  const authUser = useAuthUser()
  const [hoverText, setHoverText] = useState("")
  const [hoverVariant, setHoverVariant] = useState("")
  const text = user.following ? "Following" : "follow"
  const variant = user.following ? "primary" : "outline-primary"

  function handleMouseEnter() {
    user.following && setHoverText("Unfollow")
    user.following && setHoverVariant("danger")
  }
  function handleMouseLeave() {
    setHoverText("")
    setHoverVariant("")
  }

  async function handleUnfollow(event) {
    event.preventDefault()
    await unfollowUser(user.screen_name)
    setHoverText("Unfollowed")
  }
  function handleFollow(event) {
    event.preventDefault()
    followUser(user.screen_name)
  }

  const hideButton = !user || authUser?.screen_name === user.screen_name

  if (hideButton) return null

  return (
    <Button
      onClick={user.following ? handleUnfollow : handleFollow}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant={hoverVariant || variant}
      className="rounded-pill px-3 py-1 font-weight-bold"
    >
      <span> {hoverText || text}</span>
    </Button>
  )
}
