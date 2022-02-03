import styles from "./styles.module.css";

export function IdCard(props) {

  return (
    <div className={styles.card}>
       
      <p><span>Full Name: </span>{props.fullName}</p>
      <p><span>Gender: </span> {props.gender}</p>
      <p><span>Birthday: </span> {props.birth} {props.birthday}</p>

      <img src={props.picture} alt={props.alt} />

    </div>
  );
}