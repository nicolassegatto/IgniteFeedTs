import { Header } from "../../components/Header/Header";
import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './Home.module.css'

interface PostProps {
  id: number;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  },
  publishedAt: Date;
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
}

const posts : PostProps[]  = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nicolassegatto.png",
      name: "Nicolas Segatto",
      role: "FullStack Developer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋." },
      { type: 'paragraph', content: "Hoje é um grande dia!!!" },
      { type: 'paragraph', content: "Estou apresentando o meu TCC, espero que gostem 🚀" },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://media.licdn.com/dms/image/C4E03AQECA2hFp2mwkA/profile-displayphoto-shrink_800_800/0/1654629063769?e=1676505600&v=beta&t=hUYhxOlkPdCFRGC-7oKA0EMXEGqYtArHozrlJ96IBNc",
      name: "Maurício Machado",
      role: "Especialista Melhoria Contínua",
    },
    content: [
      { type: 'paragraph', content: "Vocês viram aquilo? 🫢." },
      { type: 'paragraph', content: "A apresentação do TCC foi fera!" },
    ],
    publishedAt: new Date('2022-05-06 18:00:00')
  },
{
    id: 3,
    author: {
      avatarUrl: "https://i.ytimg.com/vi/wbf7mSRpBDQ/maxresdefault.jpg",
      name: "Fabrício Pelizer",
      role: "Production Engineer",
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋." },
      { type: 'paragraph', content: "Eu sou o professor Fabrício" },
      { type: 'paragraph', content: "Este aluno que vos apresenta, tirou nota 100 🚀:" }
    ],
    publishedAt: new Date('2022-12-12 12:00:00')
  },
];

export function Home() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(OBJ => {
            return (
              <Post
                key={OBJ.id}
                author={OBJ.author}
                content={OBJ.content}
                publishedAt={OBJ.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}