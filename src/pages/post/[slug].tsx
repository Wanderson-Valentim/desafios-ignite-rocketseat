import { GetStaticPaths, GetStaticProps } from 'next';
import { FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return(
    <>
      <Header/>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('posts',{
    pageSize: 30
  });

  return { 
    paths: posts.results.map((post) => {
      return { params: { slug: post.uid } }
    }),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('posts', slug);

  console.log(response.data.content)

  const post = {
    'first_publication_date': response.first_publication_date,
    'data': {
      'title': response.data.title,
      'banner': {
        'url': response.data.banner.url
      },
      'author': response.data.author,
      'content': {
        'heading': response.data.content.heading,
        'body': {
          'text': response.data.content.body.text,
        },
      },
    }
  }

  return{
    props: post
  }
};
