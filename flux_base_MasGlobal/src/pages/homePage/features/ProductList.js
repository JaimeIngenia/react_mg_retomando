import styles from "../styles/ProductList.module.css";
import stock__active from "../../../assets/stock__active.svg";
import add from "../../../assets/add.svg";

export const ProductList = ({ products, onAddCarProduct }) => {
  return (
    <>
      {products.map((x) => {
        return (
          <>
            <div key={x.id} className={styles.container}>
              <div className={styles.in__stock}>
                <img src={stock__active} alt="" />
                <p>{x.stock}</p>
              </div>

              <div className={styles.image_product}>
                <img src={x.image} alt="" />
              </div>

              <div className={styles.title__description}>
                <h6>{x.title}</h6>
                <h6> {x.descripcion} </h6>
              </div>

              <h6 className={styles.previous__price}>
                <strike>{x.previousPrice}</strike>
              </h6>
              <h5 className={styles.price}>{x.price}</h5>

              <div className={styles.count}>
                <p> cantidad : {x.count} </p>
              </div>

              <button
                className={styles.btn__add}
                onClick={onAddCarProduct}
                name={x.id}
              >
                <img className={styles.add} src={add} alt="" />
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};
