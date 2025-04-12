import styles from './SelectColor.module.scss';

interface Color {
    name: string;
    hex: string;
  }

interface ColorSelectorProps {
    colors: Color[];
    selectedColor: string;
    onColorChange: (colorName: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, selectedColor, onColorChange }) => {
  return (
    <section className={styles.colors}>
      <p>Select Colors</p>
      <div className={styles.colors__options}>
        {colors.map((color) => (
          <button
            key={color.name}
            className={`${styles.colors__options_button} ${selectedColor === color.name ? styles.selected : ''}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => onColorChange(color.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default ColorSelector;