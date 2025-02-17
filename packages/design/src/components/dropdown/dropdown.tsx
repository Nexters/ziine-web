import { css, cx } from '@/styled-system/css';
import { dropdownItemStyle, dropdownListStyle, dropdownSelectedStyle } from './dropdown.styles';
import { Icon } from '../icon';

interface DropdownListProps {
  options: string[];
  value: string;
  isOpen: boolean;
  onChangeIsOpen: () => void;
  onChangeOption: (option: string) => void;
}

export const DropdownList = ({ value, options, onChangeOption, onChangeIsOpen, isOpen }: DropdownListProps) => {
  return (
    <div className={css({ position: 'relative' })} onClick={onChangeIsOpen}>
      <div className={cx(dropdownSelectedStyle())}>
        {value} <Icon name='drop_down_arrow' size='medium' color='grayscale.0' />
      </div>
      {isOpen && (
        <ul className={cx(dropdownListStyle())}>
          {options.map((option: string, index: number) => {
            return (
              <li
                key={option}
                className={cx(
                  dropdownItemStyle(),
                  css({
                    borderBottom: index < options.length - 1 ? 'solid' : 'none', // 마지막 요소 제외
                    borderBottomColor: index < options.length - 1 ? 'grayscale.700' : 'none', // 구분선 색상
                    borderBottomWidth: index < options.length - 1 ? '1.5px' : '0', // 구분선 두께
                  }),
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  onChangeOption(option);
                  onChangeIsOpen();
                }}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
