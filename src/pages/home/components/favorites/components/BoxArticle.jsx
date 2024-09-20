import imagenPrueba from '/img/imagenPrueba.svg'
import './boxArticle.css'

export default function BoxArticle({ objecto }) {
    return (
        <div className="box-articles">
            {
                Object.values(objecto).map((item, index) => (
                    <div className="box-containerArticle" key={index}>
                        <div className="box-imagenArticle">
                            <img src={imagenPrueba} alt="" />
                        </div>
                        <div className="box-textArticle">
                            <p>{item.texto1}</p>
                            <p>{item.texto2}</p>
                            <p>{item.texto3}</p>
                        </div>
                        <div className='buttonX'>X</div>
                    </div>
                ))
            }
        </div>
    );
}