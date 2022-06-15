import { Post } from "./components/Post"
import { Sidebar } from './components/Sidebar'
import { Header } from "./components/Header"
import styles from './App.module.css'

import './global.css'

 
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/prcordova.png',
      name: 'Pedro Ricardo',
      role: 'Web Developer at @ProcLabs'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera ' },
      { type: 'paragraph', content: 'Acabei de postar um novo conteúdo em meu canal' },
      { type: 'paragraph', content: '  Está muito bacana!' },
      { type: 'link', content: 'https://MeuFeed.com/meufeed' }


    ],
    publishedAt: new Date('2022-06-13 21:24:40'),

  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/EDusik.png',
      name: 'Eduardo Dusik',
      role: 'Web Developer at @Warren'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal ' },
      { type: 'paragraph', content: 'Acabei de ver uma notícia sobre novas technologias para desenvolvimento' },
      { type: 'paragraph', content: 'Vai ser maravilhoso para nosso futuro, trabalhar nela!' },
      { type: 'link', content:  'http://g1.com/noticias' }


    ],
    publishedAt: new Date('2022-06-13 04:42:00'),

  },
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
             return (<Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />)
            })
          }


        </main>
      </div>
    </>

  )
}
