import { GetStaticPaths, GetStaticProps } from 'next';
import { FiUser, FiCalendar, FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useRouter } from 'next/router';
import { PrismicRichText } from '@prismicio/react'
import { RichTextField } from "@prismicio/types"

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Head from 'next/head';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        type: string;
        text: string;
        spans:[];
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

interface Content{
  type: string;
  text: string;
  spans:[];
}

export default function Post({ post }:PostProps) {
  const contentPost:RichTextField[] = getPrismicRichText()
  const router = useRouter()
  getReadingMinutes()

  if(router.isFallback){
    return <div>Carregando...</div>
  }

  function getPrismicRichText():RichTextField[]{
    const richText:RichTextField[] = post.data.content.map((content):RichTextField => {
      const contentRichText:RichTextField = [
        {
          type: 'heading1',
          text: content.heading,
          spans: [],
        }
      ]

      content.body.forEach(contentBody => {
        const paragraph:RichTextField = [
          {
            type: 'paragraph',
            text: contentBody.text,
            spans: contentBody.spans,
          }
        ]

        contentRichText.push(paragraph[0])
      })

      return contentRichText
    })
    return richText
  }

  function getReadingMinutes(){
    let numWords:number = 0

    contentPost.forEach(element => {
      element.forEach((content:Content) => {
        const wordsList = content.text.split(' ');
        const newWordsList = wordsList.filter(word => word !== '');
        numWords += newWordsList.length
      })
    })

    const readingTime = Math.ceil(numWords/200)
    
    return readingTime
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
        <title>{post.data.title}</title>
      </Head>

      <div className={styles.postPageContainer}>
        <Header/>

        <img src={post.data.banner.url} alt="" />
        
        <div className={styles.titleInfoContainer}>

          <h1>{post.data.title}</h1>
          
          <div className={commonStyles.infoContainer}>

            <div>
              <FiCalendar />
              <time>{formatDate(post.first_publication_date)}</time>
            </div>
            <div>
              <FiUser />
              <p>{post.data.author}</p>
            </div>
            <div>
              <FiClock />
              <p>{getReadingMinutes()} min</p>
            </div>

          </div>

        </div>

        <div className={styles.postTextContainer}>
          {contentPost.map((content, index) => (
              <PrismicRichText key={index} field={content} />
            ))
          }
        </div>
      </div>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});
  const posts = await prismic.getByType('posts',{
    pageSize: 3
  });

  return { 
    paths: posts.results.map((post) => {
      return { params: { slug: post.uid } }
    }),
    fallback: true,
  }
}

export const getStaticProps:GetStaticProps = async ({ params }) => {
  const slug = String(params['slug'])
  const prismic = getPrismicClient({});
  const response = await prismic.getByUID('posts', slug);

  const post:Post = {
    'uid': response.uid,
    'first_publication_date': response.first_publication_date,
    'data': {
      'title': response.data.title,
      'subtitle': response.data.subtitle,
      'banner': {
        'url': response.data.banner.url
      },
      'author': response.data.author,
      'content': response.data.content
    }
  }

  return{
    props: { post }
  }
};