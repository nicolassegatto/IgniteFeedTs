import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comments/Comments'
import styles from './Post.module.css'

interface PostProps {
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

export function Post({ author, publishedAt, content }: PostProps) {

  const [NewComment, setNewComment] = useState<string>('')
  const [comments, setComments] = useState<string[]>([])

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Para comentar digite sua mensagem!')
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewComment(event.target.value);
  }

  function handleAddToComments(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, NewComment]);
    setNewComment('');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWhithoutDeletedOne = comments.filter(OBJ => {
      return OBJ !== commentToDelete
    })
    setComments(commentsWhithoutDeletedOne);
  }

  const isNewCommentEmpty = NewComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorinfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
          {publisedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>

        {content.map(OBJ => {
          if (OBJ.type === 'paragraph') {
            return (<p key={OBJ.content}>{OBJ.content}</p>)
          } else if (OBJ.type === 'link') {
            return (<p key={OBJ.content}><a href="#">{OBJ.content}</a></p>)
          }
        })}

      </div>

      <form onSubmit={handleAddToComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewComment}
          value={NewComment}
          placeholder='Deixe um comentario'
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(OBJ => {
          return <Comment key={OBJ} content={OBJ} onDeleteComment={deleteComment} />
        })}
      </div>
    </article>
  )
}