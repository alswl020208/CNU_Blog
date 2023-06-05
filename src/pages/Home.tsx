import { useEffect, useState } from 'react';
import { getPostList } from '../api';
import PostListItem from '../components/PostListItem';
import { IResponsePostList, TAG } from '../api/types';
import NoPostList from '../components/NoPostList';

const list = [
  {
    post: {
      id: 1,
      title: '1번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 2,
      title: '2번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
  {
    post: {
      id: 3,
      title: '3번 게시글',
      contents: '내용',
      tag: TAG.REACT,
    },
  },
];

const Home = () => {
<<<<<<< HEAD
  return <div>{
    list.map(item => (<PostListItem key={item.post.id} {...item.post}/>))
  }</div>;
=======
  return (
    <div>
      {list.map(item => (
        <PostListItem key={item.post.id} {...item.post} />
      ))}
    </div>
  );
>>>>>>> b8a6d60efcb0a8ca8e508590fd39983c799e7d16
};

export default Home;
