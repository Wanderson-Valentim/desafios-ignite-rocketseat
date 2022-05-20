import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { FiUser, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }:HomeProps) {
  const [nextPage, setNextPage] = useState<string>(postsPagination.next_page)
  const [posts, setPosts] = useState<Post[]>(postsPagination.results)

  async function getPagination(){
    try{
      const response = await fetch(nextPage)
      const data = await response.json()
  
      if(data.next_page === null){
        setNextPage(null)
      }
      else{
        setNextPage(data.next_page)
      }

      const results = data.results.map( post => {
        const formattingPost = {
          'uid': post.uid,
          'first_publication_date': post.first_publication_date,
          'data': {
            'title': post.data.title,
            'subtitle': post.data.subtitle,
            'author': post.data.author
           }
        }
    
        return formattingPost
      })

      const newPosts = posts.concat(results)
      
      setPosts(newPosts)
    }catch(e){
      console.log(e)
    }
  }

  function formatDate(date:string){
    const formattedDate = format(
      new Date(date),
      'PP',
      {
        locale: ptBR,
      }
    )

    return formattedDate
  }

  return(
    <>
      <Head>
        <title>spacetravelling.</title>
      </Head>
      <div className={styles.pageContainer}>
          <Header />
          
          <div className={styles.postsContainer}>

            {posts.map(post => (
              <div key={post.uid} className={styles.post}>
                <Link href={`post/${post.uid}`}>
                  <a>{post.data.title}</a>
                </Link>
                <p className={styles.subtitle}>{post.data.subtitle}</p>
                <div className={commonStyles.infoContainer}>

                  <div>
                    <FiCalendar />
                    <time>{formatDate(post.first_publication_date)}</time>
                  </div>
                  <div>
                    <FiUser />
                    <p>{post.data.author}</p>
                  </div>

                </div>
              </div>
            ))}

          </div>
          
          {nextPage === null ? <></> : 
            <div className={styles.buttonContainer}>
              <button onClick={getPagination}>Carregar mais posts</button>
            </div>
          }

      </div>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const prismic = getPrismicClient({});
  const postsResponse = await prismic.getByType('posts', {
    pageSize: 2
  });

  const results = postsResponse.results.map( post => {
    const formattingPost = {
      'uid': post.uid,
      'first_publication_date': post.first_publication_date,
      'data': {
        'title': post.data.title,
        'subtitle': post.data.subtitle,
        'author': post.data.author
       }
    }

    return formattingPost
  })

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: results
  }

  return{
    props: { postsPagination }
  }
};