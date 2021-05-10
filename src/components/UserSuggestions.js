import UsersList from "components/UsersList"
import React from "react"
import { useQuery } from "react-query"
import { getUserSuggestions } from "../utils/api-client"

export default function UserSuggestions(props) {
  const { authUser, length, ...rest } = props
  const { data, isLoading, isSuccess } = useQuery("UserSuggestions", () =>
    getUserSuggestions()
  )

  const filtered = data?.filter(
    (elem) => elem.id !== authUser?.id && !elem.following
  )

  if (!filtered?.length) {
    return <div className="message">No users to fooolleeww</div>
  }

  return (
    <UsersList
      {...rest}
      isSuccess={isSuccess}
      isLoading={isLoading}
      users={filtered}
    />
  )
}
