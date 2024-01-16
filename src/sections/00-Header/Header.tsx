import {theme} from '../../assets/theme';
import {Typography, TypographyHeader} from '../../assets/typography';
import './Header.css';

export const Header = () => {
  return (
    <div className="container">
      <TypographyHeader style={{fontWeight: 200, color: theme.text.main}}>
        Digital Designer
      </TypographyHeader>
    </div>
  );
};
