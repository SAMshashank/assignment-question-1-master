import styles from "./ListRowCell.module.css";

const ListRowCell = ({ children, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function passed from the parent component
    }
  };

  return (
    <td className={styles.cell} onClick={handleClick}>
      {children}
    </td>
  );
};

export default ListRowCell;
