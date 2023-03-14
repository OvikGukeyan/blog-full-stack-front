import React, { useEffect, useState } from "react";
import axios from "../axios";


import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { useParams } from "react-router-dom";

export const FullPost = () => {
  const {id} = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)
console.log(id)

  useEffect(() => {
    axios.get(`/posts/${id}`)
    .then(res => {
      setData(res.data)
      setIsLoading(false)
    })
    .catch((error) => {
      console.warn(error)
      alert('Error getting article!')
    })
  }, [])
  console.log(data)


  if(isLoading) {
    return <Post isLoading={isLoading} isFullPost/>
  }

  return (
    <>
      <Post
        id={1}
        title={data.title}
        imageUrl={`http://localhost:777/${data.imageUrl}`}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <p>
          {data.text}
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий 555555",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
