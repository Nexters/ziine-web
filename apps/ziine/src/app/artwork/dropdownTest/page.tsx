'use client';
import { css } from '@/styled-system/css';
import { useState } from 'react';

const DropdownTestPage = () => {
  const options = ['naver.com', 'gmail.com', 'kakao.com', 'daum.net', '직접 입력'];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[options.length - 1]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div
      className={css({
        position: 'relative',
      })}
      onClick={toggleDropdown}
    >
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 12px 16px 16px',
          fontSize: '16px',
          width: '136px',
          height: '50px',
          border: 'solid',
          borderWidth: '1.5px',
          borderColor: 'grayscale.700',
          borderRadius: '6px',
          cursor: 'pointer',
          bg: 'grayscale.800',
          color: 'grayscale.0',
        })}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <ul
          className={css({
            mt: '8px',
            width: '100%',
            border: 'solid',
            borderWidth: '1.5px',
            borderColor: 'grayscale.700',
            borderRadius: '6px',
            bg: 'grayscale.800',
            color: 'grayscale.0',
          })}
        >
          {options.map((option: string, index: number) => {
            return (
              <li
                key={option}
                className={css({
                  display: 'flex',
                  padding: '8px 16px',
                  height: '21px',
                  boxSizing: 'content-box',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderBottom: index < options.length - 1 ? 'solid' : 'none', // 마지막 요소 제외
                  borderBottomColor: index < options.length - 1 ? 'grayscale.700' : 'none', // 구분선 색상
                  borderBottomWidth: index < options.length - 1 ? '1.5px' : '0', // 구분선 두께
                })}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option);
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

export default DropdownTestPage;
