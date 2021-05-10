import PostsList from "components/PostsList"
import React, { useEffect, useState } from "react"
import FollowCard from "./FollowCard"
import { useInfiniteQuery } from "react-query"
import { getPosts } from "../utils/api-client"
import Spinner from "./Spinner"
import { useBottomScrollListener } from "react-bottom-scroll-listener"

export default function Feed() {
  const [page, setPage] = useState(2)
  const [hasFinished, setHasFinished] = useState(false)
  const {
    data: posts,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage
  } = useInfiniteQuery("Posts", getPosts)

  useEffect(() => {
    const hasFinished = posts?.pages.some((p) => p.length < 20)
    setHasFinished(hasFinished)
  }, [posts])

  useBottomScrollListener(() => {
    if (hasFinished) return
    fetchNextPage({ pageParam: page })
    setPage((prev) => prev + 1)
  }, 200)

  return (
    <>
      <PostsList
        posts={posts?.pages.flatMap((page) => page)}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
      {isFetchingNextPage && <Spinner />}
      <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      />
    </>
  )
}
