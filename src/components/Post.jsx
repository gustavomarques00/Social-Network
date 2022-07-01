import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/gustavomarques00.png"
          />
          <div className={styles.authorInfo}>
            <strong>Meu Nome</strong>
            <span>Meu cargo</span>
          </div>
        </div>

        <time title="11 de Maio às 8:25h" dateTime="2022-05-11 08:25:00">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>conteúdo Top</p>
        <p>conteúdo Top</p>
        <p>
          <a href="#">Link Legal</a>
        </p>
        <p>
          <a href="#">#abc</a> <a href="#">#abcasd</a> <a href="#">#asdd</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
