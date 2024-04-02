import styles from "./Prato.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPrato from "components/TagsPrato";
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato =  cardapio.find(item => item.id === Number(id));
  if(!prato){
    return <NotFound/>;
  }

  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>{"< Voltar"}</button>
      <section className={styles.container}>
        <h1>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
        </div>
        <TagsPrato {...prato}/>
      </section>
    </PaginaPadrao>
  );
}
